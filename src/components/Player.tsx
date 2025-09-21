import Hls from "hls.js";
import HslNotSupported from "./HslNotSupported";

function Player() {
  const isHslSupported = Hls.isSupported();
  const url = 'http://localhost:8080/stream.m3u8';
  const defaultWidth = 640;

  return (
    <>
      <h1>
        Streaming de Vídeo via HLS
      </h1>
      <video controls autoPlay width={defaultWidth}></video>

      {!isHslSupported && (
        <HslNotSupported />
      )}
    </>
  );
}

export default Player;