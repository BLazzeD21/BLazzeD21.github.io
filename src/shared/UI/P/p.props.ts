import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	color?: "white" | "gray";
	size?: "20" | "24";
}
