import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	percentage: number;
	name: string;
}
