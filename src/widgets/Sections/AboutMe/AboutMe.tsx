import { useTranslations } from "next-intl";

import styles from "./aboutMe.module.css";

import { AboutMeProps } from "./aboutMe.props";

import { P, Photo, Title } from "@/shared/UI";

import { SkillBlock } from "@/widgets/Blocks";

export const AboutMe = ({}: AboutMeProps) => {
	const text = useTranslations("About");
	const skillsText = useTranslations("Skills");

	const skillsList = ["webDevelopment", "softwareEngineering", "multitasking", "softSkills"];

	return (
		<section className={styles.about} id="about">
			<div className="container">
				<div className={styles.wrapper}>
					<Photo />
					<div className={styles.description}>
						<Title navyBlueCircle Tag="h2">
							{text("label")}
						</Title>
						<Title size="48" Tag="h3" className={styles.title}>
							{text("title")}
						</Title>
						<div className="divider"></div>
						<P className={styles.descriptionText} color="gray" size="24">
							{text("description")}
						</P>
					</div>
					<div className={styles.skills}>
						{skillsList.map((skill, index) => {
							return (
								<SkillBlock
									key={`skillsList-${index}`}
									title={skillsText(`${skill}.title`)}
									imageSrc={skillsText(`${skill}.imageSrc`)}
									description={skillsText(`${skill}.description`)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
