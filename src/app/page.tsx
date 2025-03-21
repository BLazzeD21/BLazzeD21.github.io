import { PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Footer, Header, Portfolio, Stack } from "@/widgets/Sections";

import {
	additionalEducation,
	description,
	higherEducation,
	internalLinks,
	portfolioItems,
	ratings,
	skillsList,
	socialLinks,
	stack,
} from "@/constants";

export default function Home() {
	return (
		<>
			{/* <CustomCursor /> */}
			<Sidepanel socialLinks={socialLinks} />
			<Header />
			<AboutMe description={description} skillsList={skillsList} />
			<Education additionalEducation={additionalEducation} higherEducation={higherEducation} />
			<Stack ratings={ratings} stack={stack} />
			<Portfolio portfolioItems={portfolioItems} />
			<Footer internalLinks={internalLinks} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
