import { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

import { portfolioMetadata } from "@/config";

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
	themeColor: "white",
};

export const metadata: Metadata = portfolioMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${quicksand.variable} font-sans`}>{children}</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
