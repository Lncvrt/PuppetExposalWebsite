"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles.css";
import { Lexend, Roboto } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faHouse, faThumbsUp, faWarning } from "@fortawesome/free-solid-svg-icons";

const lexend = Lexend({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
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

  const pathTitles: { [key: string]: string } = {
    "/archives/twitch/watch": "Twitch Archive",
    "/archives/youtube/watch": "YouTube Archive Viewer",
    "/archives/twitch": "Twitch Archive",
    "/archives/youtube": "YouTube Archive",
    "/profiles": "Online Profiles",
    "/exposal": "Exposal",
    "/archives": "Archives",
    "/": "Home",
  };
  const pathname = usePathname() || "";
  const pathTitle = Object.keys(pathTitles).find((key) => pathname.startsWith(key))
    ? pathTitles[Object.keys(pathTitles).find((key) => pathname.startsWith(key))!]
    : "N/A";
  if (pathTitle === "N/A") console.log(`Path title not found for ${pathname}, using "N/A"`);

  return (
    <>
      <html lang="en" className={`${lexend.className} ${roboto.className}`}>
        <head>
          <title>{`Thepuppetqueen57 Exposal - ${pathTitle}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={`Thepuppetqueen57 Exposal - ${pathTitle}`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://puppet.lncvrt.xyz${pathname}`} />
          <meta property="og:image" content="https://puppet.lncvrt.xyz/favicon.png" />
          <meta property="og:description" content="Exposing puppet for what he did to a 8 year old, and more." />
          <meta name="theme-color" content="#ffee00" />
          <meta name="twitter:card" content="summary_small_image" />
        </head>
        <body>
          <header className="top-bar">
            <div className="top-bar-content">
              <Link draggable={false} href="/" className={useIsSelectedExact("/") ? "selected-path" : ""}>
                <FontAwesomeIcon icon={faHouse} width={14} height={14} className="top-bar-icon" /> Home
              </Link>
              <Link draggable={false} href="/archives" className={useIsSelected("/archives") ? "selected-path" : ""}>
                <FontAwesomeIcon icon={faFloppyDisk} width={14} height={14} className="top-bar-icon" /> Archives
              </Link>
              <Link draggable={false} href="/exposal" className={useIsSelected("/exposal") ? "selected-path" : ""}>
                <FontAwesomeIcon icon={faWarning} width={14} height={14} className="top-bar-icon" /> Exposal
              </Link>
              <Link draggable={false} href="/profiles" className={useIsSelected("/profiles") ? "selected-path" : ""}>
                <FontAwesomeIcon icon={faThumbsUp} width={14} height={14} className="top-bar-icon" /> Online Profiles
              </Link>
            </div>
          </header>
          <div className="main-content">{children}</div>
          <section className="container-section w-fit m-3">
            <p>&copy; 2024 - {currentYear} Lncvrt &bull; Website designed Lncvrt - Website founded by Lncvrt & Max - Contact: <Link href="mailto:puppet-contact@lncvrt.xyz">puppet-contact@lncvrt.xyz</Link></p>
          </section>
        </body>
      </html>
    </>
  );
};

export default Layout;
