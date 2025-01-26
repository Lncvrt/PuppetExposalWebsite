"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Lexend } from "next/font/google";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFloppyDisk, faHouse, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHouse);
library.add(faYoutube);
library.add(faThumbsUp);
library.add(faFloppyDisk);

const lexend = Lexend({
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode; }) => {
  const useIsSelected = (path: string) => {
    const pathname = usePathname();
    return pathname?.startsWith(path);
  };

  const useIsSelectedExact = (path: string) => {
    const pathname = usePathname();
    return pathname === path;
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <html lang="en" className={lexend.className}>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Thepuppetqueen57&apos;s Info - Exposal Site</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:title"
            content="Thepuppetqueen57's Info - Exposal Site"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.lncvrt.xyz/" />
          <meta
            property="og:image"
            content="http://puppet.lncvrt.xyz/favicon.png"
          />
          <meta
            property="og:description"
            content="Exposing puppet for what he did to a 8 year old, and more."
          />
          <meta name="theme-color" content="#ffee00" />
          <meta name="twitter:card" content="summary_small_image" />
        </head>
        <body>
          <header className="top-bar">
            <div className="top-bar-content">
              <Link
                draggable={false}
                href="/"
                className={useIsSelectedExact("/") ? "selected-path" : ""}
              >
                <FontAwesomeIcon icon="house" width={14} height={14} className="top-bar-icon" /> Home
              </Link>
              <Link
                draggable={false}
                href="/youtube-archive"
                className={
                  useIsSelected("/youtube-archive") ? "selected-path" : ""
                }
              >
                <FontAwesomeIcon icon={['fab', 'youtube']} width={14} height={14} className="top-bar-icon" /> YouTube Archive
              </Link>
              <Link
                draggable={false}
                href="/profiles"
                className={useIsSelected("/profiles") ? "selected-path" : ""}
              >
                <FontAwesomeIcon icon="thumbs-up" width={14} height={14} className="top-bar-icon" /> Online Profiles
              </Link>
              <Link
                draggable={false}
                href="/archive-info"
                className={useIsSelected("/archive-info") ? "selected-path" : ""}
              >
                <FontAwesomeIcon icon="floppy-disk" width={14} height={14} className="top-bar-icon" /> Archive Info
              </Link>
            </div>
          </header>
          <div className="main-content">{children}</div>
          <section className="container-section w-fit m-3">
            <p>&copy; Lncvrt {currentYear}- Website designed & created by Lncvrt - Contact: <a href="mailto:puppet-contact@lncvrt.xyz">puppet-contact@lncvrt.xyz</a></p>
          </section>
        </body>
      </html >
    </>
  );
};

export default Layout;
