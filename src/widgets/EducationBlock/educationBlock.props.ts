import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface EducationBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imageUrl: string;
	name: string;
	location: string;
	body: string;
}
