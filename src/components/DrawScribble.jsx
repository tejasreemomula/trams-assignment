import { useEffect, useRef } from "react";

const DrawScribble = ({ className = "", style = {}, duration = 2200 }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      return;
    }

    const length = path.getTotalLength();
    let animFrameId = null;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        // Animate strokeDasharray from 0 → length (start-to-end draw)
        const startTime = performance.now();

        function frame(time) {
          if (!started) {
            started = true;
            // First frame: ensure path is hidden
            path.style.strokeDasharray = "0 " + String(length);
          }
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / duration, 1);
          path.style.strokeDasharray =
            String(progress * length) + " " + String(length);
          if (progress < 1) {
            animFrameId = requestAnimationFrame(frame);
          }
        }

        requestAnimationFrame(frame);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [duration]);

  return (
    <svg
      ref={containerRef}
      width="1483"
      height="654"
      viewBox="0 0 1483 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g filter="url(#draw-scribble-filter)">
        <path
          ref={pathRef}
          d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
          stroke="#FF6D6D"
          strokeWidth="5"
          fill="none"
          strokeDasharray="0 99999"
        />
      </g>
      <defs>
        <filter
          id="draw-scribble-filter"
          x="0"
          y="0"
          width="1502.99"
          height="653.604"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_9"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_9"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DrawScribble;
