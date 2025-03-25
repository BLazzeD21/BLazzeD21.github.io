import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru", "de", "fi", "es", "zh", "fr", "ar", "pt"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
