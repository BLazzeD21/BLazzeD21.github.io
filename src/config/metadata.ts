import { Metadata } from "next";

type GetMetaDataProps = {
	applicationName: string;
	keywords: string[];
	name: string;
	title: string;
	description: string;
	domain: string;
};

export const GetMetadata = ({
	applicationName,
	keywords,
	name,
	title,
	description,
	domain,
}: GetMetaDataProps): Metadata => {
	return {
		metadataBase: new URL(domain),
		applicationName: applicationName,
		keywords: keywords,
		authors: { name: name, url: domain },
		title: title,
		description: description,
		icons: {
			icon: [
				{ url: "/icons/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
				{ url: "/icons/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			],
			apple: [
				{ url: "/icons/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
				{ url: "/icons/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
			],
			other: [
				{
					rel: "icon",
					url: "/icons/favicon/android-icon-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
			],
		},
		manifest: "/icons/favicon/manifest.json",
		openGraph: {
			type: "website",
			url: domain,
			title: title,
			description: description,
			images: [
				{
					url: "/img/metadata/metadata.jpg",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: description,
			images: ["/img/metadata/metadata.jpg"],
		},
		other: {
			"msapplication-TileColor": "#ffffff",
			"msapplication-TileImage": "/icons/favicon/ms-icon-144x144.png",
		},
	};
};
