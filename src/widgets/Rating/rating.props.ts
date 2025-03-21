import { DetailedHTMLProps, HTMLAttributes } from "react";

import { RatingType } from "@/types";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	ratings: RatingType[];
}
