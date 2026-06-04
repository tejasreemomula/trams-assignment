const FooterCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-16 lg:py-24"
      style={{ background: "#D7EEDD" }}
    >
      <div
        className="mx-auto flex w-full flex-col items-center justify-center text-center"
        style={{
          maxWidth: "1600px",
          minHeight: "clamp(420px, 72vw, 1297px)",
          padding: "clamp(20px, 4vw, 48px)",
        }}
      >
        <div
          className="flex w-full flex-col items-center justify-center rounded-[100px]"
          style={{ maxWidth: "904px" }}
          style={{
            minHeight: "clamp(220px, 35vw, 388px)",
            padding: "clamp(18px, 4vw, 40px)",
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
            className="mt-4 font-satoshi text-[clamp(16px,2vw,24px)] leading-normal text-black"
            style={{ maxWidth: "680px" }}
          >
            To make your stay special and even more memorable
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
