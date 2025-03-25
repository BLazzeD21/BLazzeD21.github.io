import { Viewport } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Quicksand, Ruda } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import "../globals.css";

import { GetMetadata } from "@/config";

import { routing } from "@/i18n/routing";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	weight: ["400", "500", "600", "700"],
});

const ruda = Ruda({
	subsets: ["cyrillic"],
	variable: "--font-ruda",
	weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
	themeColor: "white",
};

export async function generateMetadata(props: Omit<Props, "children">) {
	const { locale } = await props.params;

	const text = await getTranslations({ locale, namespace: "MetaData" });

	const textAboutMe = await getTranslations({ locale, namespace: "About" });

	return GetMetadata({
		applicationName: text("applicationName"),
		keywords: text("keywords").split(","),
		name: text("name"),
		title: text("pageTitle"),
		description: textAboutMe("description"),
		domain: text("domain"),
	});
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} className={locale !== "ru" ? "quicksand" : "ruda"}>
			<body className={`${locale !== "ru" ? quicksand.variable : ruda.variable} font-sans`}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
