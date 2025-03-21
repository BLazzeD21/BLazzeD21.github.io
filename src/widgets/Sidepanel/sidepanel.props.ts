import { DetailedHTMLProps, HTMLAttributes } from "react";

import { SocialLinkType } from "@/types";

export interface SidepanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	socialLinks: SocialLinkType[];
}
