export type SkillLevel = "Basic" | "Intermediate" | "Advanced";

export type Skill = {
	name: string;
	imageSrc: string;
	level: SkillLevel;
};

export type SkillCategory = Skill[];

export type StackType = {
	Databases: SkillCategory;
	Languages: SkillCategory;
	"Frameworks, Platforms and Libraries": SkillCategory;
	Other: SkillCategory;
};
