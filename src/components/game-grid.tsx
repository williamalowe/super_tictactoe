import GameTile from "./game-tile";

type gameValues = {
  game: number;
  winner: string;
  active: boolean;
  contents: string[];
};

export default function GameGrid({ game }: { game: gameValues }) {

  console.log(game);
  return (
    <div className="flex-1 aspect-square grid grid-cols-3 gap-2 p-2 bg-white">
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
      <GameTile 
        
      />
    </div>
  );
}
