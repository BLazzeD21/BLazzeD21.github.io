import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru", "de", "fi"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
