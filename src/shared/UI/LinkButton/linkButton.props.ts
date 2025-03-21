import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export interface LinkButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	link?: string;
	children: React.ReactNode;
	buttonStyle?: "transparent" | "navyBlue" | "darkPink";
}
