import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <section className="container-section">
      <h2>Not Found</h2>
      <p>This page doesn&apos;t exist, <Link href="/">click here</Link> to go to the homepage</p>
    </section>
  );
};

export default Home;
