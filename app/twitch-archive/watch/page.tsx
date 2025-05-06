"use client";

import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

export default function YouTubeArchive() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const searchParams = new URLSearchParams(window.location.search);
      const streamId = searchParams.get("id");
      setId(streamId);
    }
  }, [isClient]);

  const decode = (str?: string) => {
    try {
      return str ? atob(str) : ""
    } catch {
      return str || ""
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [streamData, setStreamData] = useState<any>(null);

  useEffect(() => {
    async function fetchStreamData(streamId: string) {
      try {
        const response = await fetch(`/api/twitch-archive/stream?id=${streamId}`);

        if (response.status != 200) {
          alert("Error fetching stream data. Please try again later.");
          return redirect("/twitch-archive");
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
        return redirect("/twitch-archive");
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
      <p><Link draggable="false" href="/twitch-archive">Watch another stream</Link></p>
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