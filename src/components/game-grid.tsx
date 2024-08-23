import { useGame } from "@/context/game-context";
import GameTile from "./game-tile";

type gameValues = {
  game: number;
  winner: string;
  active: boolean;
  contents: string[];
};

export default function GameGrid({ game }: { game: any }) {
  const {takeTurn} = useGame();

  return (
    <div className="flex-1 aspect-square grid grid-cols-3 gap-2 p-2 bg-white">
      {
        game[0].contents.map((tile: string, index: number) => 
        <GameTile 
          key={index}
          content={tile}
          handleClick={() => takeTurn(game, index)}
        />
        )
      }
    </div>
  );
}
