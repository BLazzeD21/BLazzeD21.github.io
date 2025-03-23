import { SkillsListType } from "@/types";

export const domain: string = "https://blazzed.space";

export const pageTitle: string = "Alexandr Sekerin | Portfolio";

export const description: string =
	"What's up! My name is Alexander and I am a web developer. I have been programming since 2017 and have implemented such projects as websites, bots, desktop applications for Windows and game servers. Now I develop exclusively in web development and learn more and more new technologies to become better.";

export const skillsList: SkillsListType[] = [
	{
		title: "Web-development",
		imageSrc: "/icons/skills/web.svg",
		description:
			"I'm a front-end web developer with experience in HTML, CSS, Preprocessors, module bundlers, CSS-framework, CSS Architecture (BEM), JS, TS, React, state Containers, SSR",
	},
	{
		title: "Software Engineering",
		imageSrc: "/icons/skills/software.svg",
		description:
			"I have developed WPF and WinForms applications using a MySQL database, creating user-friendly and functional data management apps.",
	},
	{
		title: "Multitasking",
		imageSrc: "/icons/skills/multitasking.svg",
		description:
			"Experience in project management, refining design mockups, leading teams, and coordinating tasks for effective collaboration.",
	},
	{
		title: "Soft skills",
		imageSrc: "/icons/skills/soft.svg",
		description:
			"My personal qualities include effective time management, developed creative thinking, high communication skills, readiness for cooperation and ease of adaptation.",
	},
];
