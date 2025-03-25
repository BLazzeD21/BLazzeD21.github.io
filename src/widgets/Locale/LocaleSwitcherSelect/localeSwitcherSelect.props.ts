import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LocaleSwitcherButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	defaultValue: string;
	label: string;
}
