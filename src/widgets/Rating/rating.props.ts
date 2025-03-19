import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Rating } from "@/types";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	ratings: Rating[];
}
