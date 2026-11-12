import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from './Icons';

// A looping, muted screen recording in a phone frame, with a play/pause button.
// `media` needs { video, poster, posterSize }; `label` describes the recording for screen readers.
export default function PhoneVideo({ media, label }) {
  const ref = useRef(null);
  // Respect reduced motion: show the poster and let people press play themselves.
  const [reduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [playing, setPlaying] = useState(!reduced);

  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="device device-main">
      <video
        ref={ref}
        src={media.video}
        poster={media.poster}
        width={media.posterSize.width}
        height={media.posterSize.height}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <button type="button" className="device-toggle" onClick={toggle} aria-label={playing ? 'Pause video' : 'Play video'}>
        {playing ? <Pause /> : <Play />}
      </button>
    </div>
  );
}
