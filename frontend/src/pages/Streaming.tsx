import Player from "../components/Player";

function Streaming() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-2xl px-6 py-6 bg-white shadow-md rounded-2xl w-auto mb-3">Video Player</h1>
      <Player />
    </div>
  );
}

export default Streaming;