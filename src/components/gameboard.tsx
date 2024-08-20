"use client"
import GameTile from "./game-tile";

export default function Gameboard() {
  return (
    <div className="aspect-square grid grid-cols-3 gap-2">
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
    </div>
  )
}
