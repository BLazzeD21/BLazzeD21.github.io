import { DetailedHTMLProps, HTMLAttributes } from "react";

import { PortfolioItem } from "@/types";

export interface PortfolioBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	item: PortfolioItem;
}
