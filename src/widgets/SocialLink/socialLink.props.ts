import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { SocialLinkType } from "@/types";

export interface SocialLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	item: SocialLinkType;
	iconType?: "aside" | "contacts";
}
