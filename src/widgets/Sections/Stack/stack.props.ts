import { DetailedHTMLProps, HTMLAttributes } from "react";

import { RatingType, StackType } from "@/types";

export interface StackProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	ratings: RatingType[];
	stack: StackType;
}
