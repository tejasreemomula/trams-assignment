import { useEffect, useRef, useState } from "react";
import FooterNavColumn from "./footerNavColumn";
import { footerNavSections } from "../../constants/data";
import arrowscribble from "../../assets/footer/arrow-scribble.svg";
import semicircle from "../../assets/footer/footer-semi-circle.svg";

const FooterCTA = () => {
  const [arrowVisible, setArrowVisible] = useState(false);
  const arrowContainerRef = useRef(null);

  useEffect(() => {
    const el = arrowContainerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setArrowVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrowVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden py-8 md:py-10 lg:py-8"
      style={{ background: "#D7EEDD" }}
    >
      <div
        className="mx-auto flex w-full flex-col items-center justify-start text-center"
        style={{
          maxWidth: "1600px",
          minHeight: "clamp(420px, 72vw, 1297px)",
        }}
      >
        <div ref={arrowContainerRef} className="pointer-events-none absolute inset-0">
          <img
            src={arrowscribble}
            alt=""
            className={`arrow-draw absolute left-124 top-10 h-auto w-[clamp(60px,80vw,128px)] -translate-x-1/2 -translate-y-1/2 ${arrowVisible ? "is-visible" : ""}`}
          />
          <img
            src={arrowscribble}
            alt=""
            className={`arrow-draw absolute left-140 top-10 h-auto w-[clamp(60px,80vw,128px)] -translate-x-1/2 -translate-y-1/2 ${arrowVisible ? "is-visible" : ""}`}
            style={arrowVisible ? { animationDelay: "0.5s" } : {}}
          />
        </div>

        <img
          src={semicircle}
          alt=""
          className="pointer-events-none absolute -right-6 top-58  h-auto w-[clamp(60px,80vw,120px)] -translate-x-1/2 -translate-y-1/2 opacity-100"
        />

        <div
          className="flex w-full flex-col items-center justify-start rounded-[100px]"
          style={{
            maxWidth: "904px",
            minHeight: "clamp(220px, 35vw, 388px)",
            padding: "clamp(18px, 4vw, 40px)",
            paddingTop: "clamp(32px, 5vw, 60px)",
          }}
        >
          <h2
            className="font-gerbil text-[clamp(42px,5vw,100px)] leading-[1.16] text-black"
            style={{ maxWidth: "904px" }}
          >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p
            className="mt-4 font-satoshi text-[clamp(16px,2vw,16px)] leading-normal text-black"
            style={{ maxWidth: "680px" }}
          >
            To make your stay special and even more memorable
          </p>

          <button
            className="footer-subscribe-btn font-satoshi font-bold"
            style={{
              width: "clamp(160px, 20vw, 213px)",
              height: "clamp(52px, 6vw, 60px)",
              borderRadius: "100px",
              fontSize: "clamp(14px, 2.5vw, 20px)",
              lineHeight: "clamp(24px, 3.5vw, 30px)",
              letterSpacing: "0px",
              marginTop: "clamp(24px, 3vw, 40px)",
              border: "none",
              outline: "none",
            }}
          >
            Subscribe Now
          </button>
        </div>

        <div
          className="mx-auto h-px w-full bg-[#000000]"
          style={{
            maxWidth: "1000px",
            marginTop: "clamp(32px, 4vw, 48px)",
          }}
        />

        <div
          className="flex w-full flex-wrap items-start justify-between gap-y-8 px-4 sm:px-8 lg:px-0"
          style={{
            maxWidth: "1000px",
            marginTop: "clamp(32px, 4vw, 48px)",
          }}
        >
          {footerNavSections.map((section, index) => (
            <FooterNavColumn
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>
      <p
        className="mx-auto -mt-12 text-center font-satoshi text-[clamp(14px,1.4vw,12px)] leading-normal text-black"
        style={{ maxWidth: "455px" }}
      >
        ©2023 Elementum. All rights reserved
      </p>
    </section>
  );
};

export default FooterCTA;
