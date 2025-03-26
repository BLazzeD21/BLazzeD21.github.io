"use client";

import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { JSX, useEffect, useRef, useState, useTransition } from "react";

import styles from "./localeSwitcher.module.css";

import { routing } from "@/i18n/routing";

import { P } from "@/shared/UI";

import { LocaleSwitcherItem } from "@/widgets/Locale";

export const LocaleSwitcher = (): JSX.Element => {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	const [isPending, startTransition] = useTransition();
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return (): void => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className={styles.container} ref={dropdownRef}>
			<P>{t("label")}</P>
			<div className={styles.dropdown}>
				<button
					className={classNames(styles.dropdownToggle, {
						[styles.active]: isOpen && !isPending,
					})}
					onClick={() => {
						if (isPending) return;
						setIsOpen(!isOpen);
					}}
					disabled={isPending}
					aria-haspopup="true"
					aria-expanded={isOpen}
				>
					{t("locale", { locale })}
				</button>

				{isOpen && !isPending && (
					<div className={styles.dropdownMenu}>
						{routing.locales.map((cur) => {
							if (cur === locale) return;

							return (
								<LocaleSwitcherItem
									key={cur}
									locale={cur}
									isActive={cur === locale}
									label={t("locale", { locale: cur })}
									onSelect={() => setIsOpen(false)}
									startTransition={startTransition}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
