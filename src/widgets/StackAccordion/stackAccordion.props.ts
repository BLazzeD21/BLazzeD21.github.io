import { DetailedHTMLProps, HTMLAttributes } from "react";

import { StackType } from "@/types";

export interface StackAccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	stack: StackType;
}
