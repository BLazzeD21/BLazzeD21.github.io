import { DetailedHTMLProps, HTMLAttributes } from "react";

import { InternalLinkType, SocialLinkType } from "@/types";

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	socialLinks: SocialLinkType[];
	internalLinks: InternalLinkType[];
}
