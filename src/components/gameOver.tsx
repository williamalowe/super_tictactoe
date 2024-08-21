export default function GameOver({ winner, handleReset }: {
  winner: string,
  handleReset: () => void;
}) {
  return (
    <div className="absolute w-[600px] h-[300px] border-2 border-black rounded bg-white/90 p-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl">{winner} Wins!</h3>
      <h5>
        Better luck next time Player {winner === "X" ? "O" : "X"}.
      </h5>
      <button
        className="mt-12 px-2 uppercase text-white bg-black"
        onClick={handleReset}
      >
        Start Again?
      </button>
    </div>
  )
}
