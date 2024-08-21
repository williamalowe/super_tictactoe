import Gameboard from "@/components/gameboard";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="h-screen grid items-center justify-center grid-cols-3 grid-rows-3 gap-2">
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <div className="flex gap-x-4 items-center">
        <Gameboard />
        <Gameboard />
        <Gameboard />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard />
        <Gameboard />
        <Gameboard />
      </div>
      <div className="flex gap-x-4 items-center">
        <Gameboard />
        <Gameboard />
        <Gameboard />
      </div>
    </main>
  );
}
