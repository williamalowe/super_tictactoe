"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
    if (gameboard[0].active === true) {
      const oldBoards = games.filter((game) => game.game !== gameboard[0].game);
      let newContents = gameboard[0].contents;
      newContents[tile] = xTurn ? "x" : "o";
      let newBoard = {
        game: gameboard[0].game,
        winner: "",
        active: true,
        contents: newContents,
      };
      setGames([...oldBoards, newBoard]);
      setXTurn(!xTurn);
    } else {
      alert("Invalid selection");
    }
  };

  const checkWins = () => {
    for (let i = 0; i < games.length; i++) {
      if (games[i].winner === "") {
        if (
          // horizontal wins
          (games[i].contents[0] !== "" &&
            games[i].contents[0] === games[i].contents[1] &&
            games[i].contents[1] === games[i].contents[2]) ||
          (games[i].contents[3] !== "" &&
            games[i].contents[3] === games[i].contents[4] &&
            games[i].contents[4] === games[i].contents[5]) ||
          (games[i].contents[6] !== "" &&
            games[i].contents[6] === games[i].contents[7] &&
            games[i].contents[7] === games[i].contents[8]) ||
          // vertical wins
          (games[i].contents[0] !== "" &&
            games[i].contents[0] === games[i].contents[3] &&
            games[i].contents[3] === games[i].contents[6]) ||
          (games[i].contents[1] !== "" &&
            games[i].contents[1] === games[i].contents[4] &&
            games[i].contents[4] === games[i].contents[7]) ||
          (games[i].contents[2] !== "" &&
            games[i].contents[2] === games[i].contents[5] &&
            games[i].contents[5] === games[i].contents[8]) ||
          // diagonal wins
          (games[i].contents[0] !== "" &&
            games[i].contents[0] === games[i].contents[4] &&
            games[i].contents[4] === games[i].contents[8]) ||
          (games[i].contents[2] !== "" &&
            games[i].contents[2] === games[i].contents[4] &&
            games[i].contents[4] === games[i].contents[6])
        ) {
          const oldBoards = games.filter((game) => game.game !== games[i].game);
          let newBoard = {
            game: games[i].game,
            winner: xTurn ? "o" : "x",
            active: false,
            contents: games[i].contents,
          };
          setGames([...oldBoards, newBoard]);
        }
      }
    }
  };

  useEffect(() => {
    checkWins();
    console.table(games);
  }, [games, xTurn]);

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
