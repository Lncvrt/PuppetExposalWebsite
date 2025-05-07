import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFloppyDisk, faUser, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="container-section">
      <h1>Puppet Exposal</h1>
      <p>This website was down for some time but it has returned!</p>
      <p>Please select what you would like to view</p>
      <div className="selections-container">
        <Link draggable={false} href="/archives" className="selection-box button">
          <FontAwesomeIcon icon={faFloppyDisk} className="selection-icon" />
          <span className="selection-title">Archives</span>
        </Link>
        <Link draggable={false} href="/exposal" className="selection-box button">
          <FontAwesomeIcon icon={faWarning} className="selection-icon" />
          <span className="selection-title">Exposal</span>
        </Link>
        <Link draggable={false} href="/profiles" className="selection-box button">
          <FontAwesomeIcon icon={faUser} className="selection-icon" />
          <span className="selection-title">Online Profiles</span>
        </Link>
        <Link draggable={false} href="/discord" className="selection-box button">
          <FontAwesomeIcon icon={faDiscord} className="selection-icon" />
          <span className="selection-title">Our Discord</span>
        </Link>
        <Link draggable={false} href="/telegram" className="selection-box button">
          <FontAwesomeIcon icon={faTelegram} className="selection-icon" />
          <span className="selection-title">Our Telegram Group</span>
        </Link>
      </div>
      <br />
      <p>We are working on adding to the website, join our <Link href="/discord">Discord</Link> for updates.</p>
    </section>
  );
};

export default Home;
