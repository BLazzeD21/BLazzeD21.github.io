import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru", "de", "fi", "es", "zh", "fr", "ar"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
