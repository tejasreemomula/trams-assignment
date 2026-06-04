import FooterNavColumn from "./footerNavColumn";
import { footerNavSections } from "../../constants/data";

const FooterCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-16 lg:py-10"
      style={{ background: "#D7EEDD" }}
    >
      <div
        className="mx-auto flex w-full flex-col items-center justify-start text-center"
        style={{
          maxWidth: "1600px",
          minHeight: "clamp(420px, 72vw, 1297px)",
        }}
      >
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
            className="font-satoshi font-bold text-white"
            style={{
              width: "clamp(160px, 20vw, 213px)",
              height: "clamp(52px, 6vw, 60px)",
              borderRadius: "100px",
              background: "#000000",
              fontSize: "clamp(14px, 2.5vw, 20px)",
              lineHeight: "clamp(24px, 3.5vw, 30px)",
              letterSpacing: "0px",
              marginTop: "clamp(24px, 3vw, 40px)",
              cursor: "pointer",
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
    </section>
  );
};

export default FooterCTA;
