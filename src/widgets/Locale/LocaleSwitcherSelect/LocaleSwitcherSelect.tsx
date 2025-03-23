"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

export const LocaleSwitcherSelect = ({ children, defaultValue, label }: Props) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value as Locale;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	}

	return (
		<label>
			<p>{label}</p>
			<select defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange}>
				{children}
			</select>
		</label>
	);
};
