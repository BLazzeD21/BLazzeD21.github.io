import { PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Header, Portfolio, Stack } from "@/widgets/Sections";

export default function Home() {
	return (
		<>
			{/* <CustomCursor /> */}
			<Sidepanel />
			<Header />
			<AboutMe />
			<Education />
			<Stack />
			<Portfolio />
			<PageUp />
		</>
	);
}
