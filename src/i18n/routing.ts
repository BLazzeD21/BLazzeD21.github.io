import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru", "de", "fi", "zh"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
