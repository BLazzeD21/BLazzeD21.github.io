import { DetailedHTMLProps, HTMLAttributes } from "react";

import { InternalLinkType, SocialLinkType } from "@/types";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isShow: boolean;
	setIsShow: (isShow: boolean) => void;
	socialLinks: SocialLinkType[];
	internalLinks: InternalLinkType[];
}
