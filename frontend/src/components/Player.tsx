import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import HlsNotSupported from "./HlsNotSupported";

function Player() {
  const isHlsSupported = Hls.isSupported();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHlsSupported) {
        const hls = new Hls();
        hls.loadSource("http://localhost:8080/hls/stream.m3u8");
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play();
        });
      }

      if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = "http://localhost:8080/hls/stream.m3u8";
        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current?.play();
        });
      }
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", maxWidth: "800px" }}
      />
      {!isHlsSupported ? (<HlsNotSupported />) : <></>}
    </>
  );
}

export default Player;