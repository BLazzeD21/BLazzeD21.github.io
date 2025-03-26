import { useLocale, useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./localeSwitcher.module.css";

import { routing } from "@/i18n/routing";

import { LocaleSwitcherSelect } from "@/widgets/Locale";

export const LocaleSwitcher = (): JSX.Element => {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	return (
		<div className={styles.container}>
			<LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
				{routing.locales.map((cur) => (
					<option key={cur} value={cur} className={styles.option}>
						{t("locale", { locale: cur })}
					</option>
				))}
			</LocaleSwitcherSelect>
		</div>
	);
};
