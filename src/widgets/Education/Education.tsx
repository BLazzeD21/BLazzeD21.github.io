import styles from "./education.module.css";

import { Title } from "@/shared/UI";

import { EducationBlock } from "@/widgets";

import { higherEducation, additionalEducation } from "@/constants";

export const Education = () => {
	return (
		<section className={styles.education} id="education">
			<div className="container">
				<div className={styles.flex}>
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
									{higherEducation.map((education) => (
										<EducationBlock
											key={education.id}
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
									{additionalEducation.map((education) => (
										<EducationBlock
											key={education.id}
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
		</section>
	);
};
