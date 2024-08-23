import XToken from "./xToken"

export default function GameTile({ content }: {
  content: string
}) {
  return (
    <div className={`flex-1 aspect-square border-2 border-black flex items-center justify-center p-1 ${content === "" && "cursor-pointer hover:bg-green-400"}`}>
      {
        content === "x" ?
        <XToken />
        :
        <></>
      }
    </div>
  )
}
