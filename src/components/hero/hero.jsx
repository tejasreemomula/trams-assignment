import scribbleLine from "../../assets/hero/scrible-line.svg";
import orangeScribble from "../../assets/hero/orange-scribble.svg";
import blackScribble from "../../assets/hero/black-scrible.svg";
import reverseellipse from "../../assets/hero/reverse-ellipse.svg";
import pic1 from "../../assets/hero/pic-1.png";
import pic2 from "../../assets/hero/pic-2.png";
import pic3 from "../../assets/hero/pic-3.png";
import pic4 from "../../assets/hero/pic-4.png";
import pic5 from "../../assets/hero/pic-5.png";
import pic6 from "../../assets/hero/pic-6.png";
import pic7 from "../../assets/hero/pic-7.png";
import pic8 from "../../assets/hero/pic-8.png";
import GreenPill from "../GreenPill";
import PinkPill from "../PinkPill";

const Hero = () => {
  return (
    <section className="w-full min-h-100 relative  overflow-hidden pb-12 sm:pb-16 xl:pb-20">
      {/* Centered text content with responsive padding */}
      <div className="relative flex flex-col items-center text-center px-4 sm:px-8 lg:px-16 xl:px-77 pt-12 xl:pt-16">
        <h1 className="mx-auto max-w-full text-center font-gerbil text-[clamp(38px,5.2vw,96px)] font-normal leading-[1.26] tracking-normal">
          <span className="block w-full whitespace-nowrap text-center">
            The{" "}
            <span className="relative z-10 inline-block">
              thinkers
              <img
                src={scribbleLine}
                alt=""
                className="absolute left-1/2 top-[1.1em] -z-10 h-auto w-[clamp(150px,28vw,594px)] -translate-x-1/2"
              />
            </span>{" "}
            and
          </span>
          <span className="block w-full whitespace-nowrap text-center">
            doers were{" "}
            <span className="relative z-10 inline-block">
              changing
              <PinkPill
                width="clamp(150px, 22vw, 405px)"
                height="clamp(48px, 7vw, 137px)"
                className="top-1/2 -z-10"
                style={{
                  left: "clamp(44px, 2em, 98px)",
                  transform: "translateY(-50%)",
                }}
              />
            </span>
          </span>
          <span className="block w-full whitespace-nowrap text-center">
            the{" "}
            <span className="relative z-10 inline-block">
              status
              <GreenPill
                width="clamp(120px, 24vw, 300px)"
                height="clamp(46px, 10vw, 84px)"
                className="left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              />
            </span>{" "}
            Quo with
          </span>
        </h1>

        <img
          src={orangeScribble}
          alt=""
          className="pointer-events-none absolute"
          style={{
            width: "358px",
            height: "257px",
            top: "280.5px",
            left: "-160.5px",
          }}
        />
        <img
          src={blackScribble}
          alt=""
          className="pointer-events-none absolute"
          style={{
            width: "347px",
            height: "257px",
            top: "280.5px",
            left: "-120.5px",
          }}
        />
        <img
          src={reverseellipse}
          alt=""
          className="pointer-events-none absolute"
          style={{
            width: "clamp(42px, 14vw, 75px)",
            height: "auto",
            top: "clamp(180px, 64vw, 180px)",
            right: "clamp(16px, 15vw, 95px)",
          }}
        />

        <p className="font-satoshi font-normal text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] leading-normal max-w-207.75 mt-6 xl:mt-8">
          We are a team of strategists, designers communicators, researchers.
          Togeather,
          <br />
          we belive that progress only hghappens when you refuse to play things
          safe.
        </p>
      </div>

      {/* Image container - proportional absolute positioning (scales responsively) */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-0 mt-10 xl:mt-16">
        <div className="max-w-461 mx-auto">
          <div className="relative w-full aspect-1844/453">
            {/* pic-1: page(996,38) → rel(195,0) → top:43.05% left:0% */}
            <div
              className="hero-image-float absolute left-0 top-[43.05%] w-[12.255%] aspect-square"
              style={{ "--float-duration": "4s", "--float-delay": "0s" }}
            >
              <img
                src={pic1}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-2: page(940,199) → rel(139,161) → top:30.68% left:8.73% */}
            <div
              className="hero-image-float absolute left-[8.73%] top-[30.68%] w-[12.255%] aspect-square"
              style={{ "--float-duration": "3.5s", "--float-delay": "0.5s" }}
            >
              <img
                src={pic2}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-3: page(801,553) → rel(0,515) → top:0% left:27.93% */}
            <div
              className="hero-image-float absolute left-[27.93%] top-0 w-[12.255%] aspect-square"
              style={{ "--float-duration": "4.5s", "--float-delay": "1s" }}
            >
              <img
                src={pic3}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-4: page(1027,677) → rel(226,639) → top:49.89% left:34.65% */}
            <div
              className="hero-image-float absolute left-[34.65%] top-[49.89%] w-[12.255%] aspect-square"
              style={{ "--float-duration": "3.8s", "--float-delay": "0.3s" }}
            >
              <img
                src={pic4}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-5: page(856,977) → rel(55,939) → top:12.14% left:50.92% */}
            <div
              className="hero-image-float absolute left-[50.92%] top-[12.14%] w-[12.201%] aspect-square"
              style={{ "--float-duration": "4.2s", "--float-delay": "0.8s" }}
            >
              <img
                src={pic5}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-6: page(940,1144) → rel(139,1106) → top:30.68% left:59.98% */}
            <div
              className="hero-image-float absolute left-[59.98%] top-[30.68%] w-[12.255%] aspect-square"
              style={{ "--float-duration": "3.6s", "--float-delay": "0.2s" }}
            >
              <img
                src={pic6}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-7: page(801,1414) → rel(0,1376) → top:0% left:74.62% */}
            <div
              className="hero-image-float absolute left-[74.62%] top-0 w-[12.255%] aspect-square"
              style={{ "--float-duration": "4.8s", "--float-delay": "1.2s" }}
            >
              <img
                src={pic7}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* pic-8: page(960,1656) → rel(159,1618) → top:35.10% left:87.74% */}
            <div
              className="hero-image-float absolute left-[87.74%] top-[35.10%] w-[12.255%] aspect-square"
              style={{ "--float-duration": "3.3s", "--float-delay": "0.6s" }}
            >
              <img
                src={pic8}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
