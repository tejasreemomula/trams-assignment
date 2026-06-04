const FooterNavColumn = ({ title, links }) => {
  return (
    <div
      className="flex flex-col text-left"
      style={{
        width: "clamp(160px, 20vw, 220px)",
        minHeight: "clamp(200px, 18vw, 279px)",
      }}
    >
      <h3
        className="font-gerbil font-normal text-black"
        style={{
          whiteSpace: "nowrap",
          fontSize: "clamp(16px, 1.8vw, 22px)",
          lineHeight: "clamp(24px, 2.5vw, 30px)",
          letterSpacing: "0px",
          marginBottom: "clamp(16px, 2vw, 24px)",
        }}
      >
        {title}
      </h3>

      <nav className="flex flex-col gap-y-5">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="font-satoshi font-normal text-black hover:opacity-60 transition-opacity duration-200"
            style={{
              display: "block",
              width: "100%",
              padding: "4px 0",
              fontSize: "clamp(14px, 1.4vw, 20px)",
              lineHeight: "clamp(22px, 2vw, 30px)",
              letterSpacing: "0px",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterNavColumn;
