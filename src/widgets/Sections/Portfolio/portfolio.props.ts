import { DetailedHTMLProps, HTMLAttributes } from "react";

import { PortfolioItemType } from "@/types";

export interface PortfolioProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	portfolioItems: PortfolioItemType[];
}
