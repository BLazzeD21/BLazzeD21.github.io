import styles from "./rating.module.css";

import { RatingProps } from "./rating.props";

import { RatingBlock } from "@/widgets/Blocks";

export const Rating = ({ ratings }: RatingProps) => {
	return (
		<div className={styles.rating}>
			{ratings.map((rating, index) => (
				<RatingBlock key={`${rating.name}-${index}`} percentage={rating.percentage} name={rating.name} />
			))}
		</div>
	);
};
