import { SkillType } from "@/types";

export const sortSkillsByLevel = (firstSkill: SkillType, secondSkill: SkillType): number => {
	const levelOrder = { Basic: 1, Intermediate: 2, Advanced: 3 };
	return levelOrder[secondSkill.level] - levelOrder[firstSkill.level];
};
