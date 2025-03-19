import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ParticlesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	speed?: number;
	value?: number;
}
