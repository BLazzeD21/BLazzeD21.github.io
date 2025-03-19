import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SocialItem = {
	id: string;
	link: string;
	name: string;
	icon: string;
};

export interface SocialLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	item: SocialItem;
}
