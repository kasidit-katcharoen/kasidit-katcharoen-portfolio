import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('not-found');
  const locale = useLocale();
    return (
      <div>
        {locale}
        <div className="title">{t('title')}</div>
        <div className="desc">{t('desc')}</div>
        <div data-btn="outline"><span>{t('btn')}</span></div>
      </div>
    );
  }
  