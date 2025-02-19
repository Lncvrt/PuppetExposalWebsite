'use client';

import React, { useEffect, useState } from "react";
import { redirect, useRouter } from 'next/navigation';

export default function YouTubeArchive() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const searchParams = new URLSearchParams(window.location.search);
      const videoId = searchParams.get('id');
      setId(videoId);
    }
  }, [isClient]);

  const [videoData, setVideoData] = useState<any>(null);

  useEffect(() => {
    async function fetchVideoData(videoId: string) {
      try {
        const response = await fetch(`/api/youtube-archive/video?id=${videoId}`);

        if (response.status != 200) {
          alert("Error fetching video data. Please try again later.");
          return redirect('/youtube-archive');
        }

        const { data: videoData } = await response.json();

        setVideoData(videoData);

        const videoPlayer = document.getElementById('video-player') as HTMLVideoElement;
        const videoSource = document.getElementById('video-source') as HTMLSourceElement;
        videoSource.src = `https://puppet-large-cdn.lncvrt.xyz/youtube-archive/${videoData.id}.mp4`;
        videoPlayer.load();
      } catch (error) {
        console.error('Error fetching video data:', error);
        alert("Error fetching video data. Please try again later.");
        return redirect('/youtube-archive');
      }
    }

    if (id) {
      fetchVideoData(id);
    }
  }, [id, router]);

  return (
    <section className="container-section">
      <h1>Puppet&apos;s YouTube Channel Archive</h1>
      <p>You are watching &quot;{videoData?.title || 'Loading...'}&quot;</p>
      <p><a draggable="false" href="/youtube-archive">Watch another video</a></p>
      <p>If the video is loading for a while, just wait for some time. It means it&apos;s a large video.</p>
      {videoData?.description && (
        <>
          <div className="seperator" />
          <p><b>Video Description:</b></p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p className="video-description">
              {atob(videoData.description).split('\n').map((line: string, index: number) => (
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video controls controlsList="nodownload noplaybackrate noremoteplayback" disablePictureInPicture id="video-player" style={{ width: '98.5%', height: 'auto', marginBottom: 'auto' }}>
          <source id="video-source" type="video/mp4" />
          Your browser can&apos;t play videos
        </video>
      </div>
    </section>
  );
}