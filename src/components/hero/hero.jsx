import scribbleLine from "../../assets/hero/scrible-line.svg";
import pic1 from "../../assets/hero/pic-1.png";
import pic2 from "../../assets/hero/pic-2.png";
import pic3 from "../../assets/hero/pic-3.png";
import pic4 from "../../assets/hero/pic-4.png";
import pic5 from "../../assets/hero/pic-5.png";
import pic6 from "../../assets/hero/pic-6.png";
import pic7 from "../../assets/hero/pic-7.png";
import pic8 from "../../assets/hero/pic-8.png";

const Hero = () => {
  return (
    <section className="w-full min-h-[400px] relative bg-white overflow-hidden pb-12 sm:pb-16 xl:pb-20">
      {/* Centered text content with responsive padding */}
      <div className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-16 xl:px-[308px] pt-12 xl:pt-16">
        <h1 className="font-gerbil font-normal text-[36px] sm:text-[48px] md:text-[64px] lg:text-[64px] xl:text-[100px] leading-[1.26] tracking-normal max-w-[1332px]">
          The{" "}
          <span className="relative z-10">
            thinkers
            <img
              src={scribbleLine}
              alt=""
              className="absolute left-1/2 -translate-x-1/2 top-[1.1em] -z-10 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[594px] h-auto"
            />
          </span>{" "}
          and
          <br />
          doers were changing
          <br />
          the status Quo with
        </h1>

        <p className="font-satoshi font-normal text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] leading-[1.5] max-w-[831px] mt-6 xl:mt-8">
          We are a team of strategists, designers communicators, researchers.
          Togeather,
          <br />
          we belive that progress only hghappens when you refuse to play things
          safe.
        </p>
      </div>

      {/* Image container - proportional absolute positioning (scales responsively) */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-0 mt-10 xl:mt-16">
        <div className="max-w-[1844px] mx-auto">
          <div className="relative w-full aspect-[1844/453]">
            {/* pic-1: page(996,38) → rel(195,0) → top:43.05% left:0% */}
            <div className="absolute left-0 top-[43.05%] w-[12.255%] aspect-square">
              <img src={pic1} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-2: page(940,199) → rel(139,161) → top:30.68% left:8.73% */}
            <div className="absolute left-[8.73%] top-[30.68%] w-[12.255%] aspect-square">
              <img src={pic2} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-3: page(801,553) → rel(0,515) → top:0% left:27.93% */}
            <div className="absolute left-[27.93%] top-0 w-[12.255%] aspect-square">
              <img src={pic3} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-4: page(1027,677) → rel(226,639) → top:49.89% left:34.65% */}
            <div className="absolute left-[34.65%] top-[49.89%] w-[12.255%] aspect-square">
              <img src={pic4} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-5: page(856,977) → rel(55,939) → top:12.14% left:50.92% */}
            <div className="absolute left-[50.92%] top-[12.14%] w-[12.201%] aspect-square">
              <img src={pic5} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-6: page(940,1144) → rel(139,1106) → top:30.68% left:59.98% */}
            <div className="absolute left-[59.98%] top-[30.68%] w-[12.255%] aspect-square">
              <img src={pic6} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-7: page(801,1414) → rel(0,1376) → top:0% left:74.62% */}
            <div className="absolute left-[74.62%] top-0 w-[12.255%] aspect-square">
              <img src={pic7} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* pic-8: page(960,1656) → rel(159,1618) → top:35.10% left:87.74% */}
            <div className="absolute left-[87.74%] top-[35.10%] w-[12.255%] aspect-square">
              <img src={pic8} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
