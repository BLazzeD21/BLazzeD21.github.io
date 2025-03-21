import styles from "./aboutMe.module.css";

import { AboutMeProps } from "./aboutMe.props";

import { P, Photo, Title } from "@/shared/UI";

import { SkillBlock } from "@/widgets/Blocks";

export const AboutMe = ({ description, skillsList }: AboutMeProps) => {
	return (
		<section className={styles.about} id="about">
			<div className="container">
				<div className={styles.wrapper}>
					<Photo />
					<div className={styles.description}>
						<Title navyBlueCircle Tag="h2">
							About me
						</Title>
						<Title size="48" Tag="h3" className={styles.title}>
							I&apos;m web-developer
						</Title>
						<div className="divider"></div>
						<P className={styles.descriptionText} color="gray" size="24">
							{description}
						</P>
					</div>
					<div className={styles.skills}>
						{skillsList.map((skill, index) => {
							return (
								<SkillBlock
									key={`skillsList-${index}`}
									title={skill.title}
									imageSrc={skill.imageSrc}
									description={skill.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="navYwave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#9e579d"
						fillOpacity="1"
						d="M0,32L60,58.7C120,85,240,139,360,170.7C480,203,600,213,720,186.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					></path>
				</svg>
			</div>
		</section>
	);
};
