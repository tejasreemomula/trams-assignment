import hamburgerIcon from "../../assets/hero/hamburger.svg";

const NAV_LINKS = [
  "Home",
  "Features",
  "Services",
  "Testimonials",
  "Contact",
  "FAQ's",
];

const Header = () => {
  return (
    <header className="flex min-h-[64px] w-full items-center justify-between gap-4 px-4 py-2 sm:min-h-[72px] sm:px-8 md:gap-6 lg:min-h-[72px] lg:px-[120px] xl:px-[160px]">
      <div className="w-auto min-w-[128px] shrink-0 text-left font-gerbil text-[clamp(20px,4.5vw,22px)] font-normal leading-[1.64] tracking-normal sm:min-w-[160px] md:text-center lg:min-w-[201px]">
        Elementum
      </div>

      <nav className="hidden min-w-0 items-center gap-4 md:flex lg:gap-6 xl:gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-satoshi font-medium text-[14px] leading-[24px] text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap"
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-[clamp(28px,5vw,36px)] w-[clamp(28px,5vw,36px)] shrink-0 cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
      >
        <img
          src={hamburgerIcon}
          alt=""
          className="h-auto w-[clamp(22px,4vw,30px)]"
        />
      </button>
    </header>
  );
};

export default Header;
