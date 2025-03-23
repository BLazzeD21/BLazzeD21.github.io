import { useLocale } from "next-intl";

import { PageUp, Sidepanel } from "@/widgets";

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

export function MainPage() {
	const locate = useLocale() as "ru" | "en";

	return (
		<>
			{/* <CustomCursor /> */}
			<Sidepanel socialLinks={socialLinks} />
			<Header />
			<AboutMe skillsList={skillsList[locate]} />
			<Education higherEducation={higherEducation[locate]} additionalEducation={additionalEducation[locate]} />
			<Stack ratings={ratings} stack={stack} />
			<Portfolio portfolioItems={portfolioItems} />
			<Footer internalLinks={internalLinks} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
