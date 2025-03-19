import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SkillBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	imageSrc: string;
	description: string;
}
