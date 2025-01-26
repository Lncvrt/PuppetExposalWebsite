import Link from "next/link";
import React from "react";

export default function ArchiveInfo() {
  return (
    <section className="container-section">
      <h1>Archive Info</h1>
      <p>GitHub Archive (Coming soon)</p>
      <p><Link draggable="false" href="https://puppet-large-cdn.lncvrt.xyz/exposal/Archive-download.php" target="_blank">Click here to download all exposal screenshots</Link></p>
      <p><Link draggable="false" href="https://puppet-large-cdn.lncvrt.xyz/neighborhood/Archive-download.php" target="_blank">Click here to download random screenshots of Puppets Neighborhood</Link></p>
      <p><Link draggable="false" href="/youtube-archive">YouTube archive</Link></p>
    </section>
  );
};
