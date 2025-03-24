import { InternalLinkType, Locate } from "@/types";

export const internalLinks: Locate<InternalLinkType> = {
	en: [
		{
			href: "#about",
			name: "About me",
		},
		{
			href: "#education",
			name: "Education",
		},
		{
			href: "#stack",
			name: "My stack",
		},
		{
			href: "#portfolio",
			name: "Portfolio",
		},
		{
			href: "#footer",
			name: "Contacts",
		},
	],
	ru: [
		{
			href: "#about",
			name: "Обо мне",
		},
		{
			href: "#education",
			name: "Образование",
		},
		{
			href: "#stack",
			name: "Мой стек",
		},
		{
			href: "#portfolio",
			name: "Портфолио",
		},
		{
			href: "#footer",
			name: "Контакты",
		},
	],
};
