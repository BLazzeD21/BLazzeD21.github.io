"use client";

import { useParams } from "next/navigation";
import { JSX } from "react";

import styles from "./localeSwitcherItem.module.css";

import { LocaleSwitcherButtonProps } from "./localeSwitcherItem.props";

import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleSwitcherItem = ({
	locale,
	isActive,
	label,
	onSelect,
	startTransition,
}: LocaleSwitcherButtonProps): JSX.Element => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const handleClick = (): void => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known params
				{ pathname, params },
				{ locale, scroll: false },
			);
			onSelect();
		});
	};

	return (
		<button
			className={styles.menuItem}
			onClick={handleClick}
			disabled={isActive}
			aria-current={isActive ? "true" : "false"}
		>
			{label}
		</button>
	);
};
