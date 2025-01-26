"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [shanyaDefendShow, setShanyaDefendShow] = useState(false);
  const [photoMessage, setPhotoMessage] = useState('');
  const [photoNumber, setPhotoNumber] = useState(1);
  const photoSource = `https://puppet-cdn.lncvrt.xyz/exposal/${photoNumber}.png`;

  const changeImage = (direction: number) => {
    const photoRange = [1, 24];
    setPhotoNumber((prev) => {
      const newNumber = prev + direction;
      if (newNumber < photoRange[0]) return photoRange[1];
      if (newNumber > photoRange[1]) return photoRange[0];
      return newNumber;
    });
    setPhotoMessages();
  };

  const setPhotoMessages = () => {
    if (photoNumber == 1) {
      setPhotoMessage("This was when we had the idea of screenshot farming Puppet, because NoteX had Puppet added.");
    } else if (photoNumber == 14) {
      setPhotoMessage("Bad excuse.");
    } else if (photoNumber == 15) {
      setPhotoMessage("This is complete BS. Discord has ZERO chat encryption. Puppet pretty much talks on no other chat app than Discord.");
    } else if (photoNumber == 19) {
      setPhotoMessage("What the FUCK? Raping somebody, venting to another person, and not including important details like age (they were 8 btw) is crazy. Also for clarification, puppet did actually rape them.");
    } else {
      setPhotoMessage('');
    }
  };

  useEffect(() => {
    setPhotoMessages();
  });

  return (
    <section className="container-section">
      <h1>Puppet&apos;s Info</h1>
      <div className="select">
        <p><strong>Address:</strong> 10738 W Richland Rd, Cheney, WA 99004</p>
        <p><strong>Coordinates:</strong> 47°34&apos;57.0&quot;N 117°33&apos;47.0&quot;W</p>
        <p><strong>Real Name:</strong> Elijah (He gaslit himself thinking his name is Kira)</p>
        <p><strong>New Discord:</strong> @pearxreal</p>
        <p><strong>&quot;Dads&quot; Minecraft Account</strong>: <Link draggable="false" href="https://namemc.com/profile/d96cf667-29e3-4047-977e-f2e97e031208">Natergamez</Link></p>
        <p><strong>IP:</strong> <Link href="https://ipinfo.io/73.169.161.122">73.169.161.122</Link></p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setShanyaDefendShow(!shanyaDefendShow)}>Click to {shanyaDefendShow ? 'hide' : 'show'} what Shanya (24 year old) wrote to defend Puppet when he said the N-Word</button>
      </div>
      <p style={{ display: shanyaDefendShow ? '' : 'none' }} className="select">I mean at the end of the day it&apos;s not the word it&apos;s what it represents. Racism. Can you really say someone is racist if they don&apos;t.. well defend their positoin? A racist says it, and doubles down and says it twice when you call them out for it. Words enter out vocabulary though, and sometimes we just say retarded shit and there isn&apos;t any thought or ideology   put behind it or any real meaning - that&apos;s not the people who should be getting chastised, it&apos;s the first group of people that should. I&apos;m not a racist, I know myself, I know my intentions. I can spell the word out: nigger. That changes nothing about my actual beliefs for simply typing a sequence of characters. Words are just sounds, it&apos;s their meaning that matters, and their meaning doesn&apos;t exist in a vacuum. &quot;Big&quot; has a meaning, but you can&apos;t just take that word in a vacuum and judge it. &quot;Big mountain&quot; provides more context, but still can&apos;t be judged in a vacuum, what is there to judge? &quot;I hate big mountains&quot; now there&apos;s a subject, &quot;I&quot;, and more context, specifically to hate. Now you have enough to actually make some kind of judgement, like &quot;I disagree&quot;, but, you can&apos;t disagree with the word &quot;big&quot; or the words &quot;big mountain&quot;. Racism is  something to be disagreed with, it&apos;s a way of thinking, a point of view, a perspective. The word itself doesn&apos;t create that context, it&apos;s associated with it, just like &quot;voltage&quot;  is associated with &quot;electricity&quot; - cancelling people for using a word without actually considering the intent, the perspective they hold, disregarding whether or not they actually are racist or not and just focusing on the word itself is sadly all too common on the internet, to the point where even I censor myself most of the time in order not to piss of an algorithm or TOS that doesn&apos;t take any of what I said into account.</p>
      <div className="seperator" />
      <p>So why are we exposing puppet? Have a look!</p>
      <div className="gallery">
        <button onClick={() => changeImage(-1)}>Backward</button>
        <button onClick={() => changeImage(1)}>Forward</button>
        <br />
        <img src={photoSource} alt="gallery image" />
        {[...Array(24)].map((_, index) => (
          <link
            rel="preload"
            href={`https://puppet-cdn.lncvrt.xyz/exposal/${index + 1}.png`}
            as="image"
            key={index}
          />
        ))}
        <p style={{ display: photoMessage != '' ? '' : 'none' }}>{photoMessage}</p>
        <p>Page {photoNumber}</p>
        <Link draggable="false" href="https://puppet-cdn.lncvrt.xyz/exposal-archive.zip" target="_blank">Click here to download these photos</Link>
      </div>
      <div className="seperator" />
      <p>Want to see puppets neighborhood? You can have a look</p>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '80%', maxHeight: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1734813811102!6m8!1m7!1sbfGX5GM9X7Z12L4-a3tUAg!2m2!1d47.58186572709884!2d-117.5630751312816!3f177.80454781578263!4f2.313193941687558!5f2.814520225272894" width="750" height="600" allowFullScreen />
      </div>
      <div className="seperator" />
      <p>Random audio recording of Puppet disrespecting his mother</p>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <audio controls>
          <source src="https://puppet-cdn.lncvrt.xyz/audio/mother-disrespect-001.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <br />
      <p>Puppet saying racial slurs? You know it!</p>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <audio controls>
          <source src="https://puppet-cdn.lncvrt.xyz/audio/nword-say.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <br />
      <p>Puppet sending... whatever this is, sure!</p>
      <br />
      <img src="https://puppet-cdn.lncvrt.xyz/exposal/announcement.png" />
      <br />
      <p>This was sent in a discord server with 90% of kids being under 13, Including puppet (11)!</p>
      <br />
      <img src="https://puppet-cdn.lncvrt.xyz/exposal/announcement-reply.png" />
      <br />
      <p>Puppet replied (through the most premium chat platform - github issues!) saying it was a joke but I don&apos;t think she realizes her discord is full of very young people</p>
      <div className="seperator" />
      <p>If you don&apos;t understand, Puppet <span className="highlight">sexually harassed</span> Max/Jake and <span className="highlight">SA/Raped</span> a 8 year old.</p>
      <p>We are activly adding new info. Please <Link draggable="false" href="/discord">Join The Discord</Link> if you would like to see information we find faster, we post new findings immediately.</p>
    </section>
  );
};

export default Home;
