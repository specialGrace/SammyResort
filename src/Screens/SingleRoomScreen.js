import React from "react";
import SingleRoomImages from "../components/SingleRoom/SingleRoomImages";
import SingleRoomBanner from "../components/SingleRoomBanner/SingleRoomBanner";
import SingleRoomExtras from "../components/SingleRoomExtras/SingleRoomExtras";

const SingleRoomScreen = () => {
  return (
    <div>
          <SingleRoomBanner />
          <SingleRoomImages />
          <SingleRoomExtras />
    </div>
  );
};

export default SingleRoomScreen;
