import { Quicksand } from "next/font/google";

import "./globals.css";

export const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${quicksand.variable} font-sans`}>{children}</body>
		</html>
	);
}
