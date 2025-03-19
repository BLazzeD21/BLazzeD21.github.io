import { PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Header } from "@/widgets/Sections";

export default function Home() {
	return (
		<>
			{/* <CustomCursor /> */}
			<Sidepanel />
			<Header />
			<AboutMe />
			<Education />
			<PageUp />
		</>
	);
}
