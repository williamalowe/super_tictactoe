import OToken from "./oToken";
import XToken from "./xToken";

export default function GameTile({
  content,
  handleClick,
}: {
  content: string;
  handleClick: () => void;
}) {
  return (
    <div
      className={`flex-1 aspect-square border-2 border-black flex items-center justify-center p-1 ${
        content === "" && "cursor-pointer hover:bg-green-400"
      }`}
      onClick={handleClick}
    >
      {content === "x" ? <XToken /> : content === "o" ? <OToken /> : <></>}
    </div>
  );
}
