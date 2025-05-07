import { faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function ArchiveInfo() {
  return (
    <section className="container-section">
      <h1>Archives</h1>
      <p>We archive a lot of puppets content, a bit too much.</p>
      <p>We try our hardest daily to expand on this the most we can.</p>
      <div className="seperator" />
      <h2>Select what you want to view</h2>
      <div className="archives-container">
        <Link draggable={false} href="/archives/youtube" className="archive-box">
          <FontAwesomeIcon icon={faYoutube} className="archive-icon" />
          <span className="archive-title">YouTube Archive</span>
        </Link>
        <Link draggable={false} href="/archives/twitch" className="archive-box">
          <FontAwesomeIcon icon={faTwitch} className="archive-icon" />
          <span className="archive-title">Twitch Archive</span>
        </Link>
      </div>
    </section >
  );
};
