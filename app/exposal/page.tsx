"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Exposal() {
  const [shanyaDefendShow, setShanyaDefendShow] = useState(false);
  const [exposalPhotoMessage, setExposalPhotoMessage] = useState("");
  const [exposalPhotoNumber, setExposalPhotoNumber] = useState(1);
  const [neighborhoodPhotoNumber, setNeighborhoodPhotoNumber] = useState(1);
  const exposalPhotoSource = `https://puppet-cdn.lncvrt.xyz/exposal/${exposalPhotoNumber}.png`;
  const neighborhoodPhotoSource = `https://puppet-cdn.lncvrt.xyz/neighborhood/${neighborhoodPhotoNumber}.png`;

  const changeExposalImage = (direction: number) => {
    const photoRange = [1, 24];
    setExposalPhotoNumber((prev) => {
      const newNumber = prev + direction;
      if (newNumber < photoRange[0]) return photoRange[1];
      if (newNumber > photoRange[1]) return photoRange[0];
      return newNumber;
    });
    setExposalPhotoMessages();
  };

  const changeNeighborhoodImage = (direction: number) => {
    const photoRange = [1, 10];
    setNeighborhoodPhotoNumber((prev) => {
      const newNumber = prev + direction;
      if (newNumber < photoRange[0]) return photoRange[1];
      if (newNumber > photoRange[1]) return photoRange[0];
      return newNumber;
    });
  };

  const setExposalPhotoMessages = () => {
    if (exposalPhotoNumber == 1) {
      setExposalPhotoMessage("This was when we had the idea of screenshot farming Puppet, because NoteX had Puppet added.");
    } else if (exposalPhotoNumber == 14) {
      setExposalPhotoMessage("Bad excuse.");
    } else if (exposalPhotoNumber == 15) {
      setExposalPhotoMessage("This is complete BS. Discord has ZERO chat encryption (hence the recent geometry dash creator points situation, and literally said by the ceo that e2e will not be coming to discord). Puppet pretty much talks on no other chat app than Discord.");
    } else if (exposalPhotoNumber == 19) {
      setExposalPhotoMessage("What the FUCK? Raping somebody, venting to another person, and not including important details like age (they were 8 btw) is crazy. Also for clarification, puppet did actually rape them.");
    } else {
      setExposalPhotoMessage("");
    }
  };

  useEffect(() => {
    setExposalPhotoMessages();
  });

  return (
    <section className="container-section">
      <h1>Puppet Exposal</h1>
      <p>Puppet has raped a 8 year old, this is the reason the site exists.</p>
      <p>I wouldn't put this much work just for someone I don't like.</p>
      <div className="seperator" />
      <h3>Puppet&apos;s Info</h3>
      <div className="select">
        <p><strong>Address:</strong> 10738 W Richland Rd, Cheney, WA 99004</p>
        <p><strong>Coordinates:</strong> 47°34&apos;57.0&quot;N 117°33&apos;47.0&quot;W</p>
        <p><strong>Real Name:</strong> Elijah (He gaslit himself thinking his name is Kira)</p>
        <p><strong>New Discord:</strong> @pearxreal</p>
        <p><strong>&quot;Dads&quot; Minecraft Account</strong>: <Link draggable="false" href="https://namemc.com/profile/d96cf667-29e3-4047-977e-f2e97e031208">Natergamez</Link></p>
        <p><strong>IP:</strong> <Link href="https://ipinfo.io/73.169.161.122">73.169.161.122</Link></p>
        <p><strong>Birthday:</strong> January 13th, 2013</p>
        <p><strong>Email: </strong> <Link href="mailto:doggyandkira2013@gmail.com">doggyandkira2013@gmail.com</Link></p>
        <p><strong>Gender: </strong> <u>Male</u></p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setShanyaDefendShow(!shanyaDefendShow)}>Click to {shanyaDefendShow ? "hide" : "show"} what Shanya (24 year old) wrote to defend Puppet when he said the N-Word</button>
      </div>
      <p style={{ display: shanyaDefendShow ? "" : "none" }} className="select">I mean at the end of the day it&apos;s not the word it&apos;s what it represents. Racism. Can you really say someone is racist if they don&apos;t.. well defend their positoin? A racist says it, and doubles down and says it twice when you call them out for it. Words enter out vocabulary though, and sometimes we just say retarded shit and there isn&apos;t any thought or ideology   put behind it or any real meaning - that&apos;s not the people who should be getting chastised, it&apos;s the first group of people that should. I&apos;m not a racist, I know myself, I know my intentions. I can spell the word out: nigger. That changes nothing about my actual beliefs for simply typing a sequence of characters. Words are just sounds, it&apos;s their meaning that matters, and their meaning doesn&apos;t exist in a vacuum. &quot;Big&quot; has a meaning, but you can&apos;t just take that word in a vacuum and judge it. &quot;Big mountain&quot; provides more context, but still can&apos;t be judged in a vacuum, what is there to judge? &quot;I hate big mountains&quot; now there&apos;s a subject, &quot;I&quot;, and more context, specifically to hate. Now you have enough to actually make some kind of judgement, like &quot;I disagree&quot;, but, you can&apos;t disagree with the word &quot;big&quot; or the words &quot;big mountain&quot;. Racism is  something to be disagreed with, it&apos;s a way of thinking, a point of view, a perspective. The word itself doesn&apos;t create that context, it&apos;s associated with it, just like &quot;voltage&quot;  is associated with &quot;electricity&quot; - cancelling people for using a word without actually considering the intent, the perspective they hold, disregarding whether or not they actually are racist or not and just focusing on the word itself is sadly all too common on the internet, to the point where even I censor myself most of the time in order not to piss of an algorithm or TOS that doesn&apos;t take any of what I said into account.</p>
      <div className="seperator" />
      <p>Why did we leak his information? Take a look at these messages</p>
      <div className="gallery">
        <button onClick={() => changeExposalImage(-1)}>Backward</button>
        <button onClick={() => changeExposalImage(1)}>Forward</button>
        <br />
        <img src={exposalPhotoSource} alt="Gallery Image" />
        <p style={{ display: exposalPhotoMessage != "" ? "" : "none" }}>{exposalPhotoMessage}</p>
        <p>Page {exposalPhotoNumber}</p>
        <Link draggable="false" href="https://puppet-cdn.lncvrt.xyz/exposal-archive.zip" target="_blank">Click here to download these photos</Link>
      </div>
      <p>Puppet denies raping a 8 year old, but has admitted to it several times on VC.</p>
      <div className="seperator" />
      <h3>Let's explore his neighborhood!</h3>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1739767076062!6m8!1m7!1sbfGX5GM9X7Z12L4-a3tUAg!2m2!1d47.58186217938682!2d-117.5630710157365!3f175.03170310641482!4f0.3904171338496525!5f0.7820865974627469" width="1280" height="720" allowFullScreen />
      </div>
      <br />
      <p>Puppet decided blurring houses was a fun trick, use our gallery to bypass that</p>
      <div className="gallery" style={{ position: "relative" }}>
        <button onClick={() => changeNeighborhoodImage(-1)}>Backward</button>
        <button onClick={() => changeNeighborhoodImage(1)}>Forward</button>
        <br />
        <div style={{ position: "relative", display: "inline-block" }}>
          <Image src={neighborhoodPhotoSource} width={256} height={256} quality={100} unoptimized={true} alt="Gallery Image" />
          <p style={{ position: "absolute", top: 15, right: 42, margin: 0, rotate: "15deg", scale: "2" }} hidden={neighborhoodPhotoNumber != 1}>🌟</p>
        </div>
        <p>Page {neighborhoodPhotoNumber}</p>
        <Link draggable="false" href="https://puppet-cdn.lncvrt.xyz/neighborhood-archive.zip" target="_blank">Click here to download these photos</Link>
      </div>
      <div className="seperator" />
      <h3>Audio recordings</h3>
      <p>Random audio recording of Puppet disrespecting his mother</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <audio controls>
          <source src="https://puppet-cdn.lncvrt.xyz/audio/mother-disrespect-001.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <br />
      <p>Puppet saying racial slurs? Of course!</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <audio controls>
          <source src="https://puppet-cdn.lncvrt.xyz/audio/nword-say.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="seperator" />
      <h3>Other exposal</h3>
      <p>Puppet sending this message in a discord full of 90% of people being under 13</p>
      <Image src="https://puppet-cdn.lncvrt.xyz/exposal/announcement.png" width={720} height={1280} quality={100} unoptimized={true} alt="" />
      <br />
      <p>Response to me questioning it</p>
      <Image src="https://puppet-cdn.lncvrt.xyz/exposal/announcement-reply.png" width={720} height={1280} quality={100} unoptimized={true} alt="" />
      <br />
      <p>Puppet hating jesus for literally no reason? That exists too</p>
      <Image src="https://puppet-cdn.lncvrt.xyz/exposal/jesus-hate.png" width={720} height={1280} quality={100} unoptimized={true} alt="" />
      <div className="seperator" />
      <p>If you still don&apos;t understand, Puppet <span className="highlight">sexually harassed</span> Max and <span className="highlight">SA/Raped</span> a 8 year old.</p>
    </section>
  );
};
