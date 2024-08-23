import GameTile from "./game-tile";

export default function GameGrid() {
  return (
    <div className="flex-1 aspect-square grid grid-cols-3 gap-2 p-2 bg-white">
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
