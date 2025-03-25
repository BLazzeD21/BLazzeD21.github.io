import { InternalLinkType, Locale } from "@/types";

export const internalLinks: Locale<InternalLinkType> = {
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
	de: [
		{
			href: "#about",
			name: "Über mich",
		},
		{
			href: "#education",
			name: "Bildung",
		},
		{
			href: "#stack",
			name: "Mein Stack",
		},
		{
			href: "#portfolio",
			name: "Portfolio",
		},
		{
			href: "#footer",
			name: "Kontakte",
		},
	],
};
