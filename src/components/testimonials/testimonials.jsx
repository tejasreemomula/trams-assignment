import scribbleLine from "../../assets/hero/scrible-line.svg";
import img1 from "../../assets/testimonals/img-1.png";
import img2 from "../../assets/testimonals/img-2.png";
import img3 from "../../assets/testimonals/img-3.png";
import img4 from "../../assets/testimonals/img-4.png";
import img5 from "../../assets/testimonals/img-5.png";
import img6 from "../../assets/testimonals/img-6.png";
import img7 from "../../assets/testimonals/img-7.png";
import img8 from "../../assets/testimonals/img-8.png";
import TestimonialCard from "./testimonialCard";

const imageStyles = [
  { src: img1, width: "clamp(68px, 7vw, 125px)", left: "6.7%", top: "-18.9%" },
  { src: img2, width: "clamp(48px, 4vw, 74px)", left: "1.8%", top: "1.5%" },
  { src: img3, width: "clamp(110px, 10vw, 216px)", left: "8.0%", top: "9.5%" },
  { src: img4, width: "clamp(72px, 7vw, 123px)", left: "0%", top: "34.0%" },
  { src: img5, width: "clamp(84px, 7vw, 146px)", left: "87.0%", top: "-18.2%" },
  { src: img6, width: "clamp(56px, 4vw, 90px)", left: "78.1%", top: "-7.7%" },
  { src: img7, width: "clamp(64px, 6vw, 112px)", left: "80.3%", top: "6.8%" },
  {
    src: img8,
    width: "clamp(170px, 12vw, 295px)",
    left: "88.0%",
    top: "18.8%",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full overflow-visible py-2 md:py-16 lg:py-0">
      <div
        className="mx-auto flex w-full flex-col items-center px-4 text-center sm:px-8 lg:px-16"
        style={{ maxWidth: "1844px" }}
      >
        <div
          className="w-full"
          style={{ maxWidth: "685px", minHeight: "149px" }}
        >
          <h2 className="font-gerbil text-[clamp(32px,3vw,56px)] leading-[1.18] tracking-tight text-black">
            What our customer
            <br />
            <span className="relative inline-block">
              About Us
              <img
                src={scribbleLine}
                alt=""
                className="pointer-events-none absolute left-1/2 top-[1.02em] -z-10 h-auto w-[clamp(170px,18vw,260px)] -translate-x-1/2 opacity-100"
              />
            </span>
          </h2>
        </div>

        <div
          className="relative mt-6 w-full"
          style={{ maxWidth: "1844px", minHeight: "653px" }}
        >
          {imageStyles.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt=""
              className="pointer-events-none absolute z-10 h-auto rounded-[18px] object-contain"
              style={{
                width: item.width,
                left: item.left,
                top: item.top,
              }}
            />
          ))}

          <div
            className="relative z-20 mx-auto w-full"
            style={{ maxWidth: "879px" }}
          >
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
