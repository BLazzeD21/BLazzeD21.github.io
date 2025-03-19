import styles from "./photo.module.css";

export const Photo = ({}) => {
	return (
		<div className={styles.photo}>
			<picture>
				<source media="(max-width: 574px)" srcSet="img/me.jpg" />
				<source media="(max-width: 766px)" srcSet="img/me-min.jpg" />
				<img src="img/me.jpg" alt="photo" />
			</picture>
		</div>
	);
};
