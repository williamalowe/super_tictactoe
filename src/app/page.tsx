"use client"
import Gameboard from "@/components/gameboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [gameWinner, setGameWinner] = useState("");
  const [gameA1Winner, setGameA1Winner] = useState("");
  const [gameA2Winner, setGameA2Winner] = useState("");
  const [gameA3Winner, setGameA3Winner] = useState("");
  const [gameB1Winner, setGameB1Winner] = useState("");
  const [gameB2Winner, setGameB2Winner] = useState("");
  const [gameB3Winner, setGameB3Winner] = useState("");
  const [gameC1Winner, setGameC1Winner] = useState("");
  const [gameC2Winner, setGameC2Winner] = useState("");
  const [gameC3Winner, setGameC3Winner] = useState("");

  const handleTurn = () => {
    setXTurn(!xTurn);
  }

  useEffect(() => {
    if (
      // Horizontal Wins
      gameA1Winner !== "" && gameA1Winner === gameA2Winner && gameA2Winner === gameA3Winner ||
      gameB1Winner !== "" && gameB1Winner === gameB2Winner && gameB2Winner === gameB3Winner ||
      gameC1Winner !== "" && gameC1Winner === gameC2Winner && gameC2Winner === gameC3Winner ||
      // Vertical Wins
      gameA1Winner !== "" && gameA1Winner === gameB1Winner && gameB1Winner === gameC1Winner ||
      gameA2Winner !== "" && gameA2Winner === gameB2Winner && gameB2Winner === gameC2Winner ||
      gameA3Winner !== "" && gameA3Winner === gameB3Winner && gameB3Winner === gameC3Winner ||
      // Diagonal Wins
      gameA1Winner !== "" && gameA1Winner === gameB2Winner && gameB2Winner === gameC3Winner ||
      gameC1Winner !== "" && gameC1Winner === gameB2Winner && gameB2Winner === gameA3Winner 
    ) {
      setGameWinner(gameA1Winner);
      alert("game over");
    }
  }, [gameA1Winner, gameA2Winner, gameA3Winner, gameB1Winner, gameB2Winner, gameB3Winner, gameC1Winner, gameC2Winner, gameC3Winner ])


  return (
    // <main className="h-screen grid items-center justify-center grid-cols-3 grid-rows-3 gap-2">
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameA1Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameA2Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameA3Winner(winner)}
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameB1Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameB2Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameB3Winner(winner)}
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameC1Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameC2Winner(winner)}
        />
        <Gameboard 
          xTurn={xTurn}
          isActive={true}
          handleTurn={handleTurn}
          setGameWinner={(winner: string) => setGameC3Winner(winner)}
        />
      </div>
    </main>
  );
}
