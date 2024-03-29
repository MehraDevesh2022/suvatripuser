import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPicture from "./AllPicture";
import RoomPic from "./RoomPic";
import Popertypic from "./Popertypic";
import Nearbypic from "./Nearbypic";

function PictureRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPicture />} />
        <Route path="/roompic" element={<RoomPic />} />
        <Route path="/nearbypic" element={<Nearbypic />} />
        <Route path="/property" element={<Popertypic />} />
      </Routes>
    </div>
  );
}

export default PictureRoute;
