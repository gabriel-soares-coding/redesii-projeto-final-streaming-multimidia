import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import HlsNotSupported from "./HlsNotSupported";

function Player() {
  const isHlsSupported = Hls.isSupported();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const defaultVideoHeight = "768px";

  useEffect(() => {
    if (videoRef.current) {
      if (isHlsSupported) {
        const hls = new Hls();
        hls.loadSource("http://localhost:8080/hls/stream.m3u8");
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current!.style.height = defaultVideoHeight;
          videoRef.current?.play();
        });
      }

      if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current!.style.height = defaultVideoHeight;
        videoRef.current.src = "http://localhost:8080/hls/stream.m3u8";
        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current?.play();
        });
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-3.5 bg-white shadow-lg max-w-3xl rounded-2xl">  

      <video
        ref={videoRef}
        controls
        autoPlay
        draggable
        width="1000px"
      />
      {!isHlsSupported && (<HlsNotSupported />)}
    </div>
  );
}

export default Player;