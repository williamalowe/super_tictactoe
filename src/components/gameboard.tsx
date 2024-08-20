"use client";
import { useEffect, useState } from "react";
import GameTile from "./game-tile";

export default function Gameboard() {
  const [winner, setWinner] = useState("");
  const [xTurn, setXTurn] = useState(true);
  const [tiles, setTiles] = useState([
    { position: 0, content: "" },
    { position: 1, content: "" },
    { position: 2, content: "" },
    { position: 3, content: "" },
    { position: 4, content: "" },
    { position: 5, content: "" },
    { position: 6, content: "" },
    { position: 7, content: "" },
    { position: 8, content: "" },
    { position: 9, content: "" },
  ]);

  useEffect(() => {
    if(winner !== "") {
      alert(`Game Over! ${winner} Wins!`)
    }
  }, [winner, tiles, xTurn])

  const checkWinner = () => {
    if (
      // Horizontal Wins
      tiles[1].content !== "" && tiles[1].content === tiles[2].content &&
      tiles[2].content === tiles[3].content ||
      tiles[4].content !== "" && tiles[4].content === tiles[5].content &&
      tiles[5].content === tiles[6].content ||
      tiles[7].content !== "" && tiles[7].content === tiles[8].content &&
      tiles[8].content === tiles[9].content ||
      // Vertical Wins
      tiles[1].content !== "" && tiles[1].content === tiles[4].content &&
      tiles[4].content === tiles[7].content ||
      tiles[2].content !== "" && tiles[2].content === tiles[5].content &&
      tiles[5].content === tiles[8].content ||
      tiles[3].content !== "" && tiles[3].content === tiles[6].content &&
      tiles[6].content === tiles[9].content ||
      // Diagonal Wins
      tiles[1].content !== "" && tiles[1].content === tiles[5].content &&
      tiles[5].content === tiles[9].content ||
      tiles[3].content !== "" && tiles[3].content === tiles[5].content &&
      tiles[5].content === tiles[7].content
    ) {
      setWinner(xTurn ? "O" : "X");
    } else {
      setXTurn(!xTurn)
    }
  };

  const playTurn = (position: number) => {
    if (tiles[position].content !== "") {
      alert("This tile is already taken!");
    } else {
      let updatedTile = { position: position, content: "" };
      const newTiles = tiles.filter((tile) => tile.position !== position);
      if (xTurn === true) {
        updatedTile.content = "x";
      } else {
        updatedTile.content = "o";
      }
      setTiles([...newTiles, updatedTile]);
      checkWinner();
    }
  };

  return (
    <div className="aspect-square grid grid-cols-3 gap-2">
      {tiles
        .sort((a, b) => (a.position > b.position ? 1 : -1))
        .slice(1, 10)
        .map((tile) => (
          <GameTile
            key={tile.position}
            content={tile.content}
            handleClick={() => playTurn(tile.position)}
          />
        ))}
    </div>
  );
}
