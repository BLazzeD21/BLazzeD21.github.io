import styles from "./education.module.css";

import { Title } from "@/shared/UI";

import { EducationBlock } from "@/widgets/Blocks";

import { additionalEducation, higherEducation } from "@/constants";

export const Education = () => {
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
			<div className="darkwave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#574b90"
						fillOpacity="1"
						d="M0,224L60,240C120,256,240,288,360,261.3C480,235,600,149,720,128C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					></path>
				</svg>
			</div>
		</section>
	);
};
