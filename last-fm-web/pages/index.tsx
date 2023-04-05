import InterestingStats from "@/components/Home/InterestingStats";
import Landing from "@/components/Home/Landing";
import TopArtists from "@/components/Home/TopArtists";
import TopTracks from "@/components/Home/TopTracks";
import AppLayout from "@/components/Shared/AppLayout";
import React from "react";

const Home = () => {
  return (
    <AppLayout>
      <Landing />
      <TopArtists />
      <TopTracks />
      <InterestingStats />
    </AppLayout>
  );
};

export default Home;
