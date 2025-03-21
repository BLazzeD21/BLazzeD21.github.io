import { DetailedHTMLProps, HTMLAttributes } from "react";

import { SkillsListType } from "@/types";

export interface AboutMeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	description: string;
	skillsList: SkillsListType[];
}
