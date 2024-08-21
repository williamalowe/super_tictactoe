"use client";

import OMarker from "./oMarker";
import XMarker from "./xMarker";

export default function GameTile({
  content,
  handleClick,
}: {
  content: string;
  handleClick: () => void;
}) {
  return (
    <div
      className="bg-blue-200 rounded aspect-square flex items-center justify-center h-[8vh] hover:bg-blue-400 cursor-pointer"
      onClick={handleClick}
    >
      {content === "x" ? <XMarker /> : content === "o" ? <OMarker /> : ""}
    </div>
  );
}
