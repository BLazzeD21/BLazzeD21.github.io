import { Locale, RatingType } from "@/types";

export const ratings: Locale<RatingType> = {
	en: [
		{ percentage: 95, name: "Website development" },
		{ percentage: 75, name: "Build applications" },
		{ percentage: 90, name: "SEO" },
		{ percentage: 90, name: "Creativity" },
		{ percentage: 80, name: "UX/UI design" },
		{ percentage: 94, name: "Soft skills" },
	],
	ru: [
		{ percentage: 95, name: "Разработка сайтов" },
		{ percentage: 75, name: "Создание ПО" },
		{ percentage: 90, name: "SEO-оптимизация" },
		{ percentage: 90, name: "Креативность" },
		{ percentage: 80, name: "UX/UI дизайн" },
		{ percentage: 94, name: '"Мягкие" навыки' },
	],
	de: [
		{ percentage: 95, name: "Webseitenentwicklung" },
		{ percentage: 75, name: "Anwendungsentwicklung" },
		{ percentage: 90, name: "SEO" },
		{ percentage: 90, name: "Kreativität" },
		{ percentage: 80, name: "UX/UI Design" },
		{ percentage: 94, name: "Soft Skills" },
	],
};
