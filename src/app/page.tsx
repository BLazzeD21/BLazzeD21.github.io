import { AboutMe, CustomCursor, Header, PageUp, Sidepanel } from "@/widgets";

export default function Home() {
	return (
		<>
			<CustomCursor />
			<Sidepanel />
			<Header />
			<AboutMe />
			<PageUp />
		</>
	);
}
