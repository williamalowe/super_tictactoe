export default function XToken() {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      <div className="absolute w-full h-2 bg-black rotate-45"/>
      <div className="absolute w-full h-2 bg-black -rotate-45"/>
    </div>
  )
}
