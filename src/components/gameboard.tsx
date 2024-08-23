import GameGrid from "./game-grid";

export default function Gameboard() {
  return (
    <section className="flex-1 aspect-square flex flex-col gap-4 bg-black">
      <div className="flex-1 flex gap-4">
        <GameGrid />
        <GameGrid />
        <GameGrid />
      </div>
      <div className="flex-1 flex gap-4">
        <GameGrid />
        <GameGrid />
        <GameGrid />
      </div>
      <div className="flex-1 flex gap-4">
        <GameGrid />
        <GameGrid />
        <GameGrid />
      </div>
    </section>
  )
}
