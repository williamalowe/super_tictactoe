"use client";
import { useGame } from "@/context/game-context";
import GameGrid from "./game-grid";

type gameValues = {
  game: number;
  winner: string;
  active: boolean;
  contents: string[];
};

export default function Gameboard() {
  const { games } = useGame();

  return (
    <section className="flex-1 aspect-square flex flex-col gap-4 bg-black">
      <div className="flex-1 flex gap-4">
        <GameGrid game={games.filter((game: gameValues) => game.game === 1)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 2)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 3)} />
      </div>
      <div className="flex-1 flex gap-4">
        <GameGrid game={games.filter((game: gameValues) => game.game === 4)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 5)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 6)} />
      </div>
      <div className="flex-1 flex gap-4">
        <GameGrid game={games.filter((game: gameValues) => game.game === 7)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 8)} />
        <GameGrid game={games.filter((game: gameValues) => game.game === 9)} />
      </div>
    </section>
  );
}
