"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";

import styles from "./localeSwitcherButton.module.css";

import { LocaleSwitcherButtonProps } from "./localeSwitcherButton.props";

import { usePathname, useRouter } from "@/i18n";

import { P } from "@/shared/UI";

export const LocaleSwitcherButton = ({ currentLocale, label }: LocaleSwitcherButtonProps) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	const toggleLocale = () => {
		const nextLocale = currentLocale === "en" ? "ru" : "en";
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	};

	return (
		<button onClick={toggleLocale} disabled={isPending} className={styles.button}>
			<P size="20" color="white">
				{label}
			</P>
		</button>
	);
};
