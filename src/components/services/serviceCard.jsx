const ServiceCard = ({ eyebrow, title }) => {
  return (
    <article className="w-full">
      <div
        className="mx-auto flex w-full flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:py-6"
        style={{ maxWidth: "1600px" }}
      >
        <div className="min-w-0 flex-1 basis-55 lg:max-w-65">
          <p
            className="font-satoshi text-[clamp(18px,2vw,30px)] leading-[1.4] text-black"
            style={{ maxWidth: "300px" }}
          >
            {eyebrow}
          </p>
        </div>

        <div className="min-w-0 flex-1 lg:max-w-230">
          <h3
            className="font-gerbil text-[clamp(28px,4vw,36px)] leading-[1.05] text-black"
            style={{ maxWidth: "920px" }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div
        className="mx-auto h-px w-full bg-[#B1B1B1]"
        style={{ maxWidth: "1600px" }}
      />
    </article>
  );
};

export default ServiceCard;
