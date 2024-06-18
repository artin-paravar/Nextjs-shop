export default function Loading() {
  return (
    <div className="h-full w-full absolute top-0 bg-white z-[999] flex items-center justify-center">
      <div
        className="w-24 h-24 rounded-full animate-spin
  border-x-4 border-solid border-black border-t-transparent"
      ></div>
    </div>
  );
}
