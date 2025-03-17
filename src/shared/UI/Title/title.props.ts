import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface subTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	size?: "16" | "18" | "20" | "22" | "36" | "48" | "56" | "72";
	circle?: boolean;
}
