import styles from "./stack.module.css";

import { StackProps } from "./stack.props";

import { Title } from "@/shared/UI";

import { Rating, StackAccordion } from "@/widgets";

import { StackWave } from "@/widgets/Waves";

export const Stack = ({ ratings, stack }: StackProps) => {
	return (
		<section className={styles.stack} id="stack">
			<div className="container">
				<div className="flex">
					<Title Tag="h3" size="18" navyBlueCircle isCircleCenter>
						Stack
					</Title>
					<Title Tag="h3" size="48" className={styles.title}>
						My skills
					</Title>
					<div className="divider"></div>
					<StackAccordion stack={stack} />
				</div>
				<Rating ratings={ratings} />
			</div>
			<StackWave />
		</section>
	);
};
