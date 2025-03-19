import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SocialLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	item: {
		id: string;
		link: string;
		name: string;
		icon: string;
	};
}
