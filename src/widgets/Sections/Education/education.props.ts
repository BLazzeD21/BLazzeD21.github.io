import { DetailedHTMLProps, HTMLAttributes } from "react";

import { EducationType } from "@/types";

export interface EducationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	higherEducation: EducationType[];
	additionalEducation: EducationType[];
}
