import { DetailedHTMLProps, HTMLAttributes, TransitionStartFunction } from "react";

export interface LocaleSwitcherButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	locale: string;
	isActive: boolean;
	label: string;
	onSelect: () => void;
	startTransition: TransitionStartFunction;
}
