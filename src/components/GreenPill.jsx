const GreenPill = ({
  width = 207,
  height = 70,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`pointer-events-none absolute rounded-[100px] bg-[#D7EEDD] ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
    />
  );
};

export default GreenPill;
