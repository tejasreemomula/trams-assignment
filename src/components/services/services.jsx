import GreenPill from "../GreenPill";
import scribbleLine from "../../assets/hero/scrible-line.svg";
import ServiceCard from "./serviceCard";

const services = [
  {
    eyebrow: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    eyebrow: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    eyebrow: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const Services = () => {
  return (
    <section className="relative w-full overflow-visible py-2 md:py-16 lg:py-50">
      <div
        className="mx-auto flex w-full flex-col px-4 sm:px-8 lg:px-16"
        style={{ maxWidth: "1618px" }}
      >
        <div
          className="mb-12 pl-1 text-left sm:pl-2 lg:pl-4"
          style={{ maxWidth: "869px" }}
        >
          <h2
            className="font-gerbil text-[clamp(30px,3vw,56px)] leading-[1.04] text-black"
            style={{ maxWidth: "700px" }}
          >
            What we{" "}
            <span className="relative inline-block">
              can
              <GreenPill
                width="clamp(100px, 8vw, 262px)"
                height="clamp(48px, 2vw, 92px)"
                className="left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              />
            </span>
            <br />
            <span className="relative inline-block">
              offer
              <img
                src={scribbleLine}
                alt=""
                className="pointer-events-none absolute left-1/2 top-[1.02em] -z-10 h-auto w-[clamp(120px,14vw,220px)] -translate-x-1/2 opacity-100"
              />
            </span>{" "}
            you!
          </h2>
        </div>
        <div
          className="mx-auto mb-4 h-px w-full bg-[#B1B1B1]"
          style={{ maxWidth: "1600px" }}
        />

        <div className="w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              eyebrow={service.eyebrow}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
