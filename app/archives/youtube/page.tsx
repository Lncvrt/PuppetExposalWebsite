"use client";

import { Video } from "@/lib/types";
import React, { useState, useEffect } from "react";

export default function YouTubeArchive() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"latest" | "oldest" | null>("latest");
  const [videoCategory, setVideoCategory] = useState<"all" | "videos" | "streams" | "shorts">("all");

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const timeFilter = (type: 1 | 0) => {
    setFilterType(type === 1 ? "latest" : "oldest");
  };

  const categoryFilter = (category: "all" | "videos" | "streams" | "shorts") => {
    setVideoCategory(category);
  };

  const getSmallTitle = (title: string) => {
    return title.length > 33 ? title.slice(0, 33) + "..." : title;
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      let filtered = [...videos];

      if (videoCategory === "videos") {
        filtered = filtered.filter(video => !video.stream && !video.short);
      } else if (videoCategory === "streams") {
        filtered = filtered.filter(video => video.stream);
      } else if (videoCategory === "shorts") {
        filtered = filtered.filter(video => video.short);
      }

      filtered.sort((a, b) => {
        const timestampA = a.timestamp;
        const timestampB = b.timestamp;
        return filterType === "latest" ? (timestampB ?? 0) - (timestampA ?? 0) : (timestampA ?? 0) - (timestampB ?? 0);
      });

      setFilteredVideos(filtered);
    }
  }, [filterType, videos, videoCategory]);

  async function fetchVideos() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/youtube-archive/videos?type=all");
      if (response.status !== 200) {
        setError("Failed to fetch videos.");
        return;
      }
      const { data: videosData } = await response.json();
      setVideos(videosData);
      setFilteredVideos(videosData);
    } catch {
      setError("Failed to fetch videos.");
    } finally {
      setLoading(false);
    }
  }

  const formatTime = (seconds: number) => {
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= 365 * 24 * 60 * 60;
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= 30 * 24 * 60 * 60;
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = "";
    if (years) result += `${years}y `;
    if (months) result += `${months}m `;
    if (days) result += `${days}d `;
    if (hours) result += `${hours}h `;
    if (minutes) result += `${minutes}m `;
    if (seconds) result += `${seconds}s`;

    return result.trim();
  };

  const decode = (str?: string) => {
    try {
      return str ? atob(str) : ""
    } catch {
      return str || ""
    }
  }

  return (
    <section className="container-section">
      <h1>Puppet&apos;s YouTube Channel Archive</h1>
      <div className="seperator" />
      <p>Filters</p>
      <div id="filterForm">
        <button type="button" className={videoCategory === "all" ? "active" : ""} onClick={() => categoryFilter("all")}>All</button>
        <button type="button" className={videoCategory === "videos" ? "active" : ""} onClick={() => categoryFilter("videos")}>Videos</button>
        <button type="button" className={videoCategory === "streams" ? "active" : ""} onClick={() => categoryFilter("streams")}>Streams</button>
        <button type="button" className={videoCategory === "shorts" ? "active" : ""} onClick={() => categoryFilter("shorts")}>Shorts</button>
        <button style={{ marginLeft: "25px" }} type="button" className={filterType === "latest" ? "active" : ""} onClick={() => timeFilter(1)}>Latest</button>
        <button type="button" className={filterType === "oldest" ? "active" : ""} onClick={() => timeFilter(0)}>Oldest</button>
      </div>
      <div className="seperator" />
      {loading && <p>Loading videos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredVideos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => {
                window.location.href = `/archives/youtube/watch/${video.id}`;
              }}
            >
              <img
                src={`https://puppet-cdn.lncvrt.xyz/youtube-thumbnails/${video.id}.webp`}
                alt={getSmallTitle(decode(video.title ?? ""))}
                width={320}
                height={180}
              />
              <p className="video-title">{getSmallTitle(decode(video.title ?? ""))}</p>
              <p>
                {formatTime(video.duration ?? 1)}
                {` • ${formatTimestamp(video.timestamp ?? 0)}`}
                {video.stream ? " • Stream" : ""}
                {video.short ? " • Short" : ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
