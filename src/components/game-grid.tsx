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

  console.log(game[0].contents)

  return (
    <div className="flex-1 aspect-square grid grid-cols-3 gap-2 p-2 bg-white">
      {
        game[0].contents.map((tile: string, index: number) => 
        <GameTile 
          key={index}
          content={tile}
          // handleClick={takeTurn}
        />
        )
      }
      {/* <GameTile
        handleClick={takeTurn(game, 0)} 
        content={game.contents[0]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 1)} 
        content={game.contents[1]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 2)} 
        content={game.contents[2]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 3)} 
        content={game.contents[3]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 4)} 
        content={game.contents[4]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 5)} 
        content={game.contents[5]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 6)} 
        content={game.contents[6]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 7)} 
        content={game.contents[7]}
        
      />
      <GameTile
        handleClick={takeTurn(game, 8)} 
        content={game.contents[8]} */}
        
      
    </div>
  );
}
