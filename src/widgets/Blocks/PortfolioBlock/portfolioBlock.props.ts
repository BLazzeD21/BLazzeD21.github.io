import { DetailedHTMLProps, HTMLAttributes } from "react";

import { PortfolioItemType } from "@/types";

export interface PortfolioBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	item: PortfolioItemType;
}
