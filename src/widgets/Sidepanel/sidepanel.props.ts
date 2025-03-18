import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SocialItem = {
	id: number;
	link: string;
	name: string;
	icon: string;
};

export interface SocialLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	item: SocialItem;
}
