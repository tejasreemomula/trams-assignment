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
    <header className="w-full h-[100px] flex items-center justify-between  px-4 sm:px-8 lg:px-[160px]">
      {/* Brand - Elementum */}
      <div className="w-[201px] h-[46px] font-gerbil text-[28px] font-normal leading-[46px] text-center tracking-normal shrink-0 ">
        Elementum
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
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

      {/* Right Icon */}
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity shrink-0">
        {/* Icon */}
      </div>
    </header>
  );
};

export default Header;
