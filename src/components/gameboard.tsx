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

  const playTurn = (position: number) => {
    if (winner === "") {
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
        setXTurn(!xTurn);
      }
    } else {
      alert(
        `Game is already over. ${winner} has won! Refresh page to restart.`
      );
    }
  };

  useEffect(() => {
    if (
      // Horizontal Wins
      (tiles[1].content !== "" &&
        tiles[1].content === tiles[2].content &&
        tiles[2].content === tiles[3].content) ||
      (tiles[4].content !== "" &&
        tiles[4].content === tiles[5].content &&
        tiles[5].content === tiles[6].content) ||
      (tiles[7].content !== "" &&
        tiles[7].content === tiles[8].content &&
        tiles[8].content === tiles[9].content) ||
      // Vertical Wins
      (tiles[1].content !== "" &&
        tiles[1].content === tiles[4].content &&
        tiles[4].content === tiles[7].content) ||
      (tiles[2].content !== "" &&
        tiles[2].content === tiles[5].content &&
        tiles[5].content === tiles[8].content) ||
      (tiles[3].content !== "" &&
        tiles[3].content === tiles[6].content &&
        tiles[6].content === tiles[9].content) ||
      // Diagonal Wins
      (tiles[1].content !== "" &&
        tiles[1].content === tiles[5].content &&
        tiles[5].content === tiles[9].content) ||
      (tiles[3].content !== "" &&
        tiles[3].content === tiles[5].content &&
        tiles[5].content === tiles[7].content)
    ) {
      setWinner(xTurn ? "O" : "X");
    }
    if (winner !== "") {
      // alert(`Game Over! ${winner} Wins!`);
    }
  }, [tiles, winner, xTurn]);

  return (
    <div className={`relative aspect-square grid grid-cols-3 gap-2 border-2 p-4 border-black/80 rounded`}>
      {tiles
        .sort((a, b) => (a.position > b.position ? 1 : -1))
        .slice(1, 10)
        .map((tile) => (
          <div
          key={tile.position}
          className={`${winner === "" ? 'opacity-100' : 'opacity-40'}`}
          >
          <GameTile
            content={tile.content}
            handleClick={() => playTurn(tile.position)}
          />
          </div>
        ))}
        {
          winner === "X" ? 
          <div className="absolute right-[calc(50%+15vh)] top-[calc(50%-1vh)]">
            <div className="absolute w-[30vh] h-2 bg-red-600 rotate-45 rounded"/>
            <div className="absolute w-[30vh] h-2 bg-red-600 -rotate-45 rounded"/>
          </div>
          :
          winner === "O" ?
          <div className="absolute aspect-square w-[30vh] rounded-full border-8 border-blue-800 left-1 top-1"/>
          :
          ""
        }
    </div>
  );
}
