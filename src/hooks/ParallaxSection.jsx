// components/ParallaxSection.js
export default function ParallaxSection({
  children,
  className,
  backgroundImage,
}) {
  return (
    <div
      className={`h-full w-full bg-fixed bg-center bg-cover flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage || "/images/bg/bg1.jpg"}')`,
      }}
    >
      {children}
    </div>
  );
}
