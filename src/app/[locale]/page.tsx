import { MainPage } from "@/appPages";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
	const { locale } = use(params);

	setRequestLocale(locale);

	return <MainPage />;
}
