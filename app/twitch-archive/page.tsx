"use client";

import { Stream } from "@/lib/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function TwitchArchive() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [filteredStreams, setFilteredStreams] = useState<Stream[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"latest" | "oldest" | null>("latest");

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const timeFilter = (type: 1 | 0) => {
    setFilterType(type === 1 ? "latest" : "oldest");
  };

  const getSmallTitle = (title: string) => {
    return title.length > 33 ? title.slice(0, 33) + "..." : title;
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  useEffect(() => {
    if (streams.length > 0) {
      const filtered = [...streams];

      filtered.sort((a, b) => {
        const timestampA = a.timestamp;
        const timestampB = b.timestamp;
        return filterType === "latest" ? (timestampB ?? 0) - (timestampA ?? 0) : (timestampA ?? 0) - (timestampB ?? 0);
      });

      setFilteredStreams(filtered);
    }
  }, [filterType, streams]);

  async function fetchStreams() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/twitch-archive/streams?type=all");
      if (response.status !== 200) {
        setError("Failed to fetch streams.");
        return;
      }
      const { data: streamsData } = await response.json();
      setStreams(streamsData);
      setFilteredStreams(streamsData);
    } catch {
      setError("Failed to fetch streams.");
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
      <h1>Puppet&apos;s Twitch Channel Archive</h1>
      <div className="seperator" />
      <p>Filters</p>
      <div id="filterForm">
        <button type="button" className={filterType === "latest" ? "active" : ""} onClick={() => timeFilter(1)}>Latest</button>
        <button type="button" className={filterType === "oldest" ? "active" : ""} onClick={() => timeFilter(0)}>Oldest</button>
      </div>
      <div className="seperator" />
      {loading && <p>Loading streams...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredStreams.length === 0 ? (
        <p>No streams found.</p>
      ) : (
        <div className="video-grid">
          {filteredStreams.map((stream) => (
            <div
              key={stream.id}
              className="video-item"
              onClick={() => {
                window.location.href = `/twitch-archive/watch?id=${stream.id}`;
              }}
            >
              <Image
                src={`https://puppet-cdn.lncvrt.xyz/twitch-thumbnails/${stream.id}.webp`}
                alt={getSmallTitle(decode(stream.title ?? ""))}
                width={320}
                height={180}
                quality={100}
              />
              <p className="video-title">{getSmallTitle(decode(stream.title ?? ""))}</p>
              <p>
                {formatTime(stream.duration ?? 1)}
                {` • ${formatTimestamp(stream.timestamp ?? 0)}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
