import React from "react";
import { Hero } from "@/components/sections/Hero";
import { LivePlatforms } from "@/components/sections/LivePlatforms";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { Schedule } from "@/components/sections/Schedule";
import { SocialLinks } from "@/components/sections/SocialLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <LivePlatforms />
      <About />
      <Community />
      <Schedule />
      <SocialLinks />
    </>
  );
}
