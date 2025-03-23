import { useLocale, useTranslations } from "next-intl";

import { LocaleSwitcherButton } from "@/widgets/Locale";

export const LocaleSwitcher = () => {
	const locale = useLocale();
	const text = useTranslations("LocaleSwitcher");
	return <LocaleSwitcherButton currentLocale={locale} label={text("label")} />;
};
