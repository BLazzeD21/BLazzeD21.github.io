import { setRequestLocale } from "next-intl/server";
import { JSX, use } from "react";

import { CustomCursor, PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Footer, Header, Portfolio, Stack } from "@/widgets/Sections";

import {
	additionalEducation,
	higherEducation,
	internalLinks,
	portfolioItems,
	ratings,
	skillsList,
	socialLinks,
	stack,
} from "@/constants";

type Props = {
	params: Promise<{ locale: "ru" | "ru" }>;
};

export default function IndexPage({ params }: Props): JSX.Element {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<>
			<CustomCursor />
			<Sidepanel socialLinks={socialLinks} />
			<Header socialLinks={socialLinks} internalLinks={internalLinks[locale]} />
			<AboutMe skillsList={skillsList[locale]} />
			<Education higherEducation={higherEducation[locale]} additionalEducation={additionalEducation[locale]} />
			<Stack ratings={ratings[locale]} stack={stack} />
			<Portfolio portfolioItems={portfolioItems} />
			<Footer internalLinks={internalLinks[locale]} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
