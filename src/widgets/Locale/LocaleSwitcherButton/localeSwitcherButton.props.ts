import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LocaleSwitcherButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentLocale: string;
	label: string;
}
