"use client";
import Gameboard from "@/components/gameboard";
import GameOver from "@/components/gameOver";
import { useEffect, useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [gameMounted, setGameMounted] = useState(true);
  const [gameWinner, setGameWinner] = useState("");
  const [gameA1Active, setGameA1Active] = useState(true);
  const [gameA2Active, setGameA2Active] = useState(true);
  const [gameA3Active, setGameA3Active] = useState(true);
  const [gameB1Active, setGameB1Active] = useState(true);
  const [gameB2Active, setGameB2Active] = useState(true);
  const [gameB3Active, setGameB3Active] = useState(true);
  const [gameC1Active, setGameC1Active] = useState(true);
  const [gameC2Active, setGameC2Active] = useState(true);
  const [gameC3Active, setGameC3Active] = useState(true);
  const [gameA1Winner, setGameA1Winner] = useState("");
  const [gameA2Winner, setGameA2Winner] = useState("");
  const [gameA3Winner, setGameA3Winner] = useState("");
  const [gameB1Winner, setGameB1Winner] = useState("");
  const [gameB2Winner, setGameB2Winner] = useState("");
  const [gameB3Winner, setGameB3Winner] = useState("");
  const [gameC1Winner, setGameC1Winner] = useState("");
  const [gameC2Winner, setGameC2Winner] = useState("");
  const [gameC3Winner, setGameC3Winner] = useState("");

  const handleTurn = (nextBoard: number) => {
    setXTurn(!xTurn);
    setActiveBoard(nextBoard);
  };

  const setActiveBoard = (activateBoard: number) => {
    switch (activateBoard) {
      case 0:
        // All boards active
        setGameA1Active(true);
        setGameA2Active(true);
        setGameA3Active(true);
        setGameB1Active(true);
        setGameB2Active(true);
        setGameB3Active(true);
        setGameC1Active(true);
        setGameC2Active(true);
        setGameC3Active(true);
      case 1:
        setGameA1Active(true);
      case 2:
        setGameA2Active(true);
      case 3:
        setGameA3Active(true);
      case 4:
        setGameB1Active(true);
      case 5:
        setGameB2Active(true);
      case 6:
        setGameB3Active(true);
      case 7:
        setGameC1Active(true);
      case 8:
        setGameC2Active(true);
      case 9:
        setXTurn(!xTurn);
        setGameC3Active(true);
    }

    const resetWinners = () => {
      setGameA1Winner("");
      setGameA2Winner("");
      setGameA3Winner("");
      setGameB1Winner("");
      setGameB2Winner("");
      setGameB3Winner("");
      setGameC1Winner("");
      setGameC2Winner("");
      setGameC3Winner("");
    };
    const resetActiveBoards = () => {
      setGameA1Active(false);
      setGameA2Active(false);
      setGameA3Active(false);
      setGameB1Active(false);
      setGameB2Active(false);
      setGameB3Active(false);
      setGameC1Active(false);
      setGameC2Active(false);
      setGameC3Active(false);
    };

    const reset = () => {
      resetWinners();
      resetActiveBoards();
      setGameWinner("");
      setXTurn(true);
      setGameMounted(false);
    };

    useEffect(() => {
      if (
        // Horizontal Wins
        (gameA1Winner !== "" &&
          gameA1Winner === gameA2Winner &&
          gameA2Winner === gameA3Winner) ||
        (gameB1Winner !== "" &&
          gameB1Winner === gameB2Winner &&
          gameB2Winner === gameB3Winner) ||
        (gameC1Winner !== "" &&
          gameC1Winner === gameC2Winner &&
          gameC2Winner === gameC3Winner) ||
        // Vertical Wins
        (gameA1Winner !== "" &&
          gameA1Winner === gameB1Winner &&
          gameB1Winner === gameC1Winner) ||
        (gameA2Winner !== "" &&
          gameA2Winner === gameB2Winner &&
          gameB2Winner === gameC2Winner) ||
        (gameA3Winner !== "" &&
          gameA3Winner === gameB3Winner &&
          gameB3Winner === gameC3Winner) ||
        // Diagonal Wins
        (gameA1Winner !== "" &&
          gameA1Winner === gameB2Winner &&
          gameB2Winner === gameC3Winner) ||
        (gameC1Winner !== "" &&
          gameC1Winner === gameB2Winner &&
          gameB2Winner === gameA3Winner)
      ) {
        setGameWinner(xTurn ? "O" : "X");
      }
    }, [
      gameA1Winner,
      gameA2Winner,
      gameA3Winner,
      gameB1Winner,
      gameB2Winner,
      gameB3Winner,
      gameC1Winner,
      gameC2Winner,
      gameC3Winner,
    ]);
    useEffect(() => {
      setGameMounted(true);
    }, [gameMounted]);

    return (
      <main className="flex h-screen flex-col items-center justify-center gap-y-4">
        {gameMounted && (
          <>
            <div className="flex gap-x-4 items-center">
              <Gameboard
                xTurn={xTurn}
                isActive={gameA1Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameA1Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameA2Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameA2Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameA3Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameA3Winner(winner)}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Gameboard
                xTurn={xTurn}
                isActive={gameB1Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameB1Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameB2Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameB2Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameB3Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameB3Winner(winner)}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Gameboard
                xTurn={xTurn}
                isActive={gameC1Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameC1Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameC2Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameC2Winner(winner)}
              />
              <Gameboard
                xTurn={xTurn}
                isActive={gameC3Active}
                handleTurn={(nextBoard: number) => handleTurn(nextBoard)}
                setGameWinner={(winner: string) => setGameC3Winner(winner)}
              />
            </div>
          </>
        )}

        {gameWinner !== "" && (
          <GameOver winner={gameWinner} handleReset={reset} />
        )}
      </main>
    );
  };
}
