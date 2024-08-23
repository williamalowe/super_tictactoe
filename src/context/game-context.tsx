"use client";

import { createContext, useContext, useState } from "react";

type gameValues = {
  game: number;
  winner: string;
  active: boolean;
  contents: string[];
};

type GameContextType = {
  takeTurn: (gameboard: gameValues, tile: number) => void;
  games: gameValues[];
};
const GameContext = createContext<GameContextType | any>(null);

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [xTurn, setXTurn] = useState(true);
  const [games, setGames] = useState([
    {
      game: 1,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 2,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 3,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 4,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 5,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 6,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 7,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 8,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
    {
      game: 9,
      winner: "",
      active: true,
      contents: ["", "", "", "", "", "", "", "", ""],
    },
  ] as gameValues[]);

  const takeTurn = (gameboard: gameValues[], tile: number) => {
    const oldBoards = games.filter((game) => game.game !== gameboard[0].game);
    let newContents = gameboard[0].contents;
    newContents[tile] = xTurn ? "x" : "o";

    let newBoard = {
      game: gameboard[0].game,
      winner: "",
      active: true,
      contents: newContents,
    };
    console.log(newBoard.contents);
    setGames([...oldBoards, newBoard]);
    setXTurn(!xTurn);
  };

  return (
    <GameContext.Provider value={{ xTurn, games, takeTurn }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
