import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";

export default function NotFound() {
  const locale = useLocale();
  const t = messages?.[locale]?.["notFound"] || "";

  return (
    <div>
      {locale}
      <div className="title">{t?.title||''}</div>
      <div className="desc">{t?.desc||''}</div>
      <div className="f-reg" data-btn="outline">
        <span>{t?.btn||''}</span>
      </div>
    </div>
  );
}
