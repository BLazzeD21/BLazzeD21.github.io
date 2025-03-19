import styles from "./stack.module.css";

import { Title } from "@/shared/UI";

import { Rating, StackAccordion } from "@/widgets";

import { ratings, stack } from "@/constants";

export const Stack = () => {
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
		</section>
	);
};
