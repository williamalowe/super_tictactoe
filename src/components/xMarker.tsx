export default function XMarker() {
  return (
    <div className="relative">
      <div className="absolute w-[8vh] h-1 bg-blue-600 rotate-45 -left-[4vh] rounded" />
      <div className="absolute w-[8vh] h-1 bg-blue-600 -rotate-45 -left-[4vh] rounded" />
    </div>
  );
}
