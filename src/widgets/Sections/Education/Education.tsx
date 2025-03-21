import styles from "./education.module.css";

import { EducationProps } from "./education.props";

import { Title } from "@/shared/UI";

import { EducationBlock } from "@/widgets/Blocks";
import { EducationWave } from "@/widgets/Waves";

export const Education = ({ higherEducation, additionalEducation }: EducationProps) => {
	return (
		<section className={styles.education} id="education">
			<div className="container">
				<div className="flex">
					<Title Tag="h3" size="18" darkPinkCircle isCircleCenter>
						Education
					</Title>
					<Title Tag="h3" size="48" className={styles.title}>
						My education
					</Title>
					<div className="divider darkPink"></div>
					<div className={styles.wrapper}>
						<div className={styles.column}>
							<Title size="20" Tag="h4">
								Higher education
							</Title>
							<ul>
								<li>
									{higherEducation.map((education, index) => (
										<EducationBlock
											key={`higherEducation-${index}`}
											imageUrl={education.imageUrl}
											name={education.name}
											location={education.location}
											body={education.body}
										/>
									))}
								</li>
							</ul>
						</div>
						<div className={styles.column}>
							<Title size="20" Tag="h4">
								Additional Education
							</Title>
							<ul>
								<li>
									{additionalEducation.map((education, index) => (
										<EducationBlock
											key={`additionalEducation-${index}`}
											imageUrl={education.imageUrl}
											name={education.name}
											location={education.location}
											body={education.body}
										/>
									))}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<EducationWave />
		</section>
	);
};
