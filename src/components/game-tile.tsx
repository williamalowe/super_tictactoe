"use client";

export default function GameTile({
  content,
  handleClick,
}: {
  content: string;
  handleClick: () => void;
}) {
  console.log(content);
  return (
    <div
      className="bg-blue-200 rounded aspect-square flex items-center justify-center h-[25vh] hover:bg-blue-400 cursor-pointer"
      onClick={handleClick}
    >
      {content === "x" ? "x" : content === "o" ? "o" : ""}
    </div>
  );
}
