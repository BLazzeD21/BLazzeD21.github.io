"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

import styles from "./localeSwitcherSelect.module.css";

import { LocaleSwitcherButtonProps } from "./localeSwitcherSelect.props";

import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleSwitcherSelect = ({ children, defaultValue, label }: LocaleSwitcherButtonProps) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value as Locale;

		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known params
				// are used in combination with a given pathname. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	}

	return (
		<label className={styles.wrapper}>
			<span className={styles.label}>{label}</span>
			<div className={styles.selectWrapper}>
				<select defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange} className={styles.select}>
					{children}
				</select>
			</div>
		</label>
	);
};
