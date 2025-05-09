import "@/src/styles/not-found.scss";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";
import Button from "@/src/components/ui/Button";

export default function NotFound() {
  const locale = useLocale();
  const t = messages?.[locale]?.["notFound"] || "";

  return (
    <div id="not-found-page" className="not-found-page">
      <div className="txt-404">{t?.["404"] || ""}</div>
      <div className="txt-title f-bol">{t?.title || ""}</div>
      <div className="txt-desc">{t?.desc || ""}</div>
      <div className="wrap-btn">
        <Button href={"/"}>{t?.btn || ""}</Button>
      </div>
    </div>
  );
}
