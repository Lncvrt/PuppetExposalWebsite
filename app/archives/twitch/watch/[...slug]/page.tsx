"use client";

import React, { use, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { Stream } from "@/lib/types";

export default function TwitchArchiveViewer({ params }: { params: Promise<{ slug: string[] }> }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const resolvedParams = use(params);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      if (resolvedParams && resolvedParams.slug && resolvedParams.slug.length > 0) {
        const streamId = resolvedParams.slug[0];
        setId(streamId);
      } else {
        alert("Invalid stream ID. Please try again.");
        redirect("/archives/twitch");
      }
    }
  }, [isClient, resolvedParams]);

  const decode = (str?: string | null) => {
    try {
      return str ? atob(str) : "";
    } catch {
      return str || "";
    }
  }

  const [streamData, setStreamData] = useState<Stream | null>(null);

  useEffect(() => {
    async function fetchStreamData(streamId: string) {
      try {
        const response = await fetch(`/api/twitch-archive/stream?id=${streamId}`);

        if (response.status != 200) {
          alert("Error fetching stream data. Please try again later.");
          return redirect("/archives/twitch");
        }

        const { data: streamData } = await response.json();

        setStreamData(streamData);

        const streamPlayer = document.getElementById("video-player") as HTMLVideoElement;
        const streamSource = document.getElementById("video-source") as HTMLSourceElement;
        streamSource.src = `https://puppet-large-cdn.lncvrt.xyz/twitch-archive/${streamData.id}.mp4`;
        streamPlayer.load();
      } catch (error) {
        console.error("Error fetching stream data:", error);
        alert("Error fetching stream data. Please try again later.");
        return redirect("/archives/twitch");
      }
    }

    if (id) {
      fetchStreamData(id);
    }
  }, [id, router]);

  return (
    <section className="container-section">
      <h1>Puppet&apos;s Twitch Channel Archive</h1>
      <p>You are watching &quot;{decode(streamData?.title) || "Loading..."}&quot;</p>
      <p><Link draggable="false" href="/archives/twitch">Watch another stream</Link></p>
      <p>If the stream is loading for a while, just wait for some time. It means it&apos;s a large stream.</p>
      {streamData?.description && (
        <>
          <div className="seperator" />
          <p><b>Stream Description:</b></p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p className="video-description">
              {atob(streamData.description).split("\n").map((line: string, index: number) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </>
      )}
      <div className="seperator" />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <video controls controlsList="nodownload noplaybackrate noremoteplayback" disablePictureInPicture id="video-player" style={{ width: "98.5%", height: "auto", marginBottom: "auto" }}>
          <source id="video-source" type="video/mp4" />
          Your browser can&apos;t play videos
        </video>
      </div>
    </section>
  );
}