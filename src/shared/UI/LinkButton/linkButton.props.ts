import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface LinkButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	link?: string;
	children: React.ReactNode;
	linkType?: "transparent" | "navyBlue" | "darkPink";
}
