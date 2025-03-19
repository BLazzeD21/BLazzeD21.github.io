import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StackBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	imageSrc: string;
	level: "Basic" | "Intermediate" | "Advanced";
}
