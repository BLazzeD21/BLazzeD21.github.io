import { PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Footer, Header, Portfolio, Stack } from "@/widgets/Sections";

import {
	additionalEducation,
	higherEducation,
	internalLinks,
	portfolioItems,
	ratings,
	socialLinks,
	stack,
} from "@/constants";

export function MainPage() {
	return (
		<>
			{/* <CustomCursor /> */}
			<Sidepanel socialLinks={socialLinks} />
			<Header />
			<AboutMe />
			<Education additionalEducation={additionalEducation} higherEducation={higherEducation} />
			<Stack ratings={ratings} stack={stack} />
			<Portfolio portfolioItems={portfolioItems} />
			<Footer internalLinks={internalLinks} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
