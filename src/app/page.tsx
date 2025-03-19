import { AboutMe, CustomCursor, Education, Header, PageUp, Sidepanel } from "@/widgets";

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
