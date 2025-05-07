// components/ParallaxSection.js
export default function ParallaxSection({
  children,
  className,
  backgroundImage,
}) {
  return (
    <div
      className={`h-full w-full bg-cover bg-center lg:bg-fixed ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage || "/images/bg/bg1.jpg"}')`,
      }}
    >
      {children}
    </div>
  );
}
