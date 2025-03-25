import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru", "de", "fi", "es", "zh"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
