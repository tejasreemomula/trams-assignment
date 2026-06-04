import invertedComma from "../../assets/testimonals/inverted-comma.png";

const TestimonialCard = () => {
  return (
    <article
      className="relative mx-auto flex w-full items-center justify-center rounded-[20px] px-4 py-6 sm:px-5 sm:py-7 lg:px-6 lg:py-8"
      style={{
        maxWidth: "clamp(300px, 50vw, 879px)",
        minHeight: "clamp(160px, 22vw, 358px)",
        background: "rgba(215, 238, 221, 0.30)",
      }}
    >
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "clamp(260px, 52vw, 703px)",
        }}
      >
        {/* Top-left opening double-quote */}
        <img
          src={invertedComma}
          alt=""
          className="pointer-events-none absolute -left-8 -top-8 h-auto w-[clamp(20px, 2.5vw, 42px)] opacity-60"
        />
        <img
          src={invertedComma}
          alt=""
          className="pointer-events-none absolute -left-3 -top-8 h-auto w-[clamp(20px, 2.5vw, 42px)] opacity-60"
        />

        {/* Bottom-right closing double-quote (rotated) */}
        <img
          src={invertedComma}
          alt=""
          className="pointer-events-none absolute -bottom-8 -right-8 h-auto w-[clamp(20px, 2.5vw, 42px)] rotate-180 opacity-60"
        />
        <img
          src={invertedComma}
          alt=""
          className="pointer-events-none absolute -bottom-8 -right-3 h-auto w-[clamp(20px, 2.5vw, 42px)] rotate-180 opacity-60"
        />

        <p
          className="font-satoshi text-[clamp(14px,1.8vw,24px)] leading-[1.35] text-black"
          style={{
            textAlign: "center",
          }}
        >
          Elementum delivered the site within the timeline they requested. In
          the end, the client found a 50% increase in traffic within days since
          its launch. They also had an impressive ability to use technologies
          that the company hasn’t used, which have also proven to be easy to use
          and reliable.
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
