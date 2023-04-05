import SingleArtist from "@/components/Artists/SingleArtist";
// import SingleArtistTopBanner from "@/components/Artists/SingleArtistTopBanner";
import AppLayout from "@/components/Shared/AppLayout";
import React from "react";

const Artist = () => {
  return (
    <AppLayout>
      {/* <SingleArtistTopBanner /> */}
      <SingleArtist />
    </AppLayout>
  );
};

export default Artist;
