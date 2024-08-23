"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Game = {
  activeBoard: number;
  xTurn: boolean;
};
type gameValues = {
  game: number,
  winner: string,
  active: boolean,
  contents: string[],
}

type GameContextType = {
  nextTurn: () => void;
  games: gameValues[],
};
const GameContext = createContext<GameContextType | any>(null);

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [games, setGames] = useState([
    {
      game: 1,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 2,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 3,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 4,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 5,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 6,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 7,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 8,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
    {
      game: 9,
      winner: "",
      active: true,
      contents: ["","","","","","","","",""]
    },
  ] as gameValues[])


  const nextTurn = () => {};
  return (
    <GameContext.Provider value={{ nextTurn, games }}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
