import Link from "next/link";
import React from "react";

export default function ArchiveInfo() {
  return (
    <section className="container-section">
      <h1>Archive Info</h1>
      <p><Link draggable="false" href="https://puppet-cdn.lncvrt.xyz/exposal-archive.zip" target="_blank">Click here to download all exposal screenshots</Link></p>
      <p><Link draggable="false" href="https://puppet-cdn.lncvrt.xyz/neighborhood-archive.zip" target="_blank">Click here to download random screenshots of Puppets Neighborhood</Link></p>
      <p><Link draggable="false" href="/youtube-archive">YouTube archive</Link></p>
      <p><Link draggable="false" href="/twitch-archive">Twitch archive</Link></p>
      <p>GitHub Archive (Coming soon)</p>
    </section>
  );
};
