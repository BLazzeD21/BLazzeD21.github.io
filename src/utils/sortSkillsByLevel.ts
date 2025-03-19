import { Skill } from "@/types";

export const sortSkillsByLevel = (firstSkill: Skill, secondSkill: Skill) => {
	const levelOrder = { Basic: 1, Intermediate: 2, Advanced: 3 };
	return levelOrder[secondSkill.level] - levelOrder[firstSkill.level];
};
