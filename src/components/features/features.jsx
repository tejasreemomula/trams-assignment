import GreenPill from "../GreenPill";
import featureImg from "../../assets/features/feature-img.png";
import featureImg2 from "../../assets/features/features-img-2.png";
import featureScribble from "../../assets/features/feature-scribble.svg";
import featureScribble1 from "../../assets/features/feature-scribble-1.svg";
import featureSquare from "../../assets/features/feature-square.svg";
import featureTriangle from "../../assets/features/feature-triangle.svg";
import scribbleLine from "../../assets/hero/scrible-line.svg";

const Features = () => {
  return (
    <section
      id="features"
      className="relative isolate w-full overflow-visible pt-16 md:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          width: "166px",
          height: "166px",
          top: "5px",
          left: "637px",

          background:
            "radial-gradient(circle, #FF2020 0%, rgba(255, 32, 32, 0.45) 45%, rgba(255, 32, 32, 0) 75%)",
          filter: "blur(70px)",
          opacity: 1,
          zIndex: 100,
        }}
      />
      <div
        className="relative z-10 mx-auto flex w-full flex-col px-4 sm:px-8 lg:px-40 "
        style={{
          width: "100%",
          maxWidth: "1599px",
          minHeight: "auto",
          gap: "clamp(24px, 4vw, 64px)",
        }}
      >
        <img
          src={featureScribble}
          alt=""
          className="pointer-events-none absolute left-195 top-114 z-[-1] -translate-x-1/2 -translate-y-1/2 opacity-100"
          style={{
            width: "949px",
            height: "auto",
            maxWidth: "none",
          }}
        />
        <img
          src={featureScribble1}
          alt=""
          className="pointer-events-none absolute -right-50 z-[-1] opacity-100"
          style={{
            width: "clamp(400px, 76vw, 1440px)",
            height: "clamp(200px, 34vw, 698px)",
            maxWidth: "100%",
            top: "clamp(500px, 40vw, 1800px)",
            transform: "rotate(-3.88deg)",
            transformOrigin: "center center",
          }}
        />
        <div
          className="flex flex-wrap items-center justify-between gap-12 xl:gap-12"
          style={{
            width: "100%",
            maxWidth: "1499px",
            minHeight: "auto",
            marginBottom: "0px",
          }}
        >
          <div
            className="min-w-0 flex-1 basis-[320px]"
            style={{
              maxWidth: "720px",
              minHeight: "220px",
              marginLeft: "clamp(-4px, -0.5vw, 0px)",
            }}
          >
            <h2
              className="font-gerbil text-[clamp(28px,3.3vw,56px)] leading-[1.1] text-black"
              style={{ maxWidth: "800px" }}
            >
              <span className="relative inline-block">
                Tomorrow
                <img
                  src={scribbleLine}
                  alt=""
                  className="pointer-events-none absolute left-1/2 top-[0.97em]  h-auto w-[clamp(280px,48vw,260px)]  -translate-x-1/2 opacity-100 -z-10"
                />
              </span>{" "}
              should
              <br />
              be better than{" "}
              <span className="relative inline-block">
                today
                <GreenPill
                  width="clamp(100px, 14vw, 240px)"
                  height="clamp(28px, 4vw, 65px)"
                  className="left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
                />
              </span>
            </h2>

            <p
              className="mt-4 font-satoshi text-[clamp(14px,1.15vw,24px)] leading-normal text-black"
              style={{ maxWidth: "455px" }}
            >
              We are a team of strategists, designers communicators,
              researchers. Togeather, we belive that progress only happens when
              you refuse to play things safe.
            </p>
          </div>
          <div
            className="relative ml-auto flex w-full shrink-0 justify-end xl:w-auto"
            style={{
              flex: "0 1 420px",
              maxWidth: "340px",
              marginRight: "clamp(-8px, 6vw, 34px)",
              transform: "translateX(clamp(36px, 8vw, 92px))",
            }}
          >
            <img
              src={featureSquare}
              alt=""
              className="pointer-events-none absolute left-60 top-2 z-0 h-auto w-[clamp(100px,12vw,220px)] opacity-100"
            />
            <img
              src={featureImg}
              alt=""
              className="relative z-10 h-auto w-full object-contain"
              style={{
                width: "clamp(180px, 24vw, 420px)",
                height: "auto",
                maxHeight: "420px",
              }}
            />
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-12 xl:gap-12 "
          style={{
            width: "100%",
            maxWidth: "1596px",
            minHeight: "auto",
            marginTop: "clamp(44px, 7vw, 72px)",
          }}
        >
          <div
            className="relative flex w-full shrink-0 justify-start xl:w-auto"
            style={{
              flex: "0 1 420px",
              maxWidth: "340px",
            }}
          >
            <img
              src={featureTriangle}
              alt=""
              className="pointer-events-none absolute -bottom-2 left-35 z-20 h-auto w-[clamp(80px,7vw,140px)] opacity-100"
            />
            <img
              src={featureTriangle}
              alt=""
              className="pointer-events-none absolute -top-3 left-1 z-10 h-auto w-[clamp(60px,6vw,110px)] opacity-100"
            />

            <img
              src={featureImg2}
              alt=""
              className="relative z-10 h-auto w-full object-contain"
              style={{
                width: "clamp(200px, 24vw, 420px)",
                height: "auto",
                maxHeight: "420px",
              }}
            />
          </div>

          <div
            className="min-w-0 flex-1 basis-[320px]"
            style={{
              width: "min(720px, 100%)",
              maxWidth: "720px",
              minHeight: "220px",
              transform: "translateX(clamp(70px, 80vw, 140px))",
            }}
          >
            <h2
              className="font-gerbil text-[clamp(28px,3.3vw,56px)] leading-[1.1] text-black"
              style={{ maxWidth: "800px" }}
            >
              <span className="relative inline-block">
                See
                <GreenPill
                  width="clamp(70px, 10vw, 180px)"
                  height="clamp(28px, 4vw, 65px)"
                  className="left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
                />
              </span>{" "}
              how we can
              <br />
              help you{" "}
              <span className="relative inline-block">
                progress
                <img
                  src={scribbleLine}
                  alt=""
                  className="pointer-events-none absolute left-1/2 top-[1.02em] -z-10 h-auto w-[clamp(280px,48vw,260px)] -translate-x-1/2 opacity-100"
                />
              </span>
            </h2>

            <p
              className="mt-4 font-satoshi text-[clamp(14px,1.15vw,24px)] leading-normal text-black"
              style={{ maxWidth: "455px" }}
            >
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
