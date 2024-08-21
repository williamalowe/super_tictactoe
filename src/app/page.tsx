"use client"
import Gameboard from "@/components/gameboard";
import { useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [gameWinner, setGameWinner] = useState("");

  const handleTurn = () => {
    setXTurn(!xTurn);
  }


  return (
    // <main className="h-screen grid items-center justify-center grid-cols-3 grid-rows-3 gap-2">
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
        />
      </div>
    </main>
  );
}
