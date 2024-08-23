"use client";

import { createContext, useContext } from "react";

type Game = {
  activeBoard: number;
  xTurn: boolean;
};

type GameContextType = {
  nextTurn: () => void;
};
const GameContext = createContext<GameContextType | null>(null);

export default function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextTurn = () => {};
  return (
    <GameContext.Provider value={{ nextTurn }}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
