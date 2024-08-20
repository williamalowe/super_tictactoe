export default function XMarker() {
  return (
    <div className="relative">
      <div className="absolute w-[20vh] h-1 bg-black rotate-45 -left-[10vh] rounded" />
      <div className="absolute w-[20vh] h-1 bg-black -rotate-45 -left-[10vh] rounded" />
    </div>
  );
}
