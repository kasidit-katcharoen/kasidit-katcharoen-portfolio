import Link from "next/link";
import '@/src/styles/ui/Button.scss'

export default function Button({
  children,
  className = "",
  onClick = () => {},
  url = null,
  dataBtn='outline',
}) {
  return (
    <>
      {url ? (
        <Link href={url} className={`${className || ""}`} data-btn={dataBtn||''}>
          <div className="box-1">
            <div className="dot"></div>
            <span>{children}</span>
          </div>
          <div className="box-2">
            <span>{children}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      ) : (
        <div className={`${className || ""}`} data-btn={dataBtn||''}>
          <div className="box-1">
            <div className="dot"></div>
            <span>{children}</span>
          </div>
          <div className="box-2">
            <span>{children}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      )}
    </>
  );
}
