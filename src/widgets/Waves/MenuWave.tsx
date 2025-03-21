import styles from "./waves.module.css";

export const MenuWave = () => {
	return (
		<div className={styles.menuWave}>
			<svg
				className={styles.darkPink}
				xmlns="http://www.w3.org/2000/svg"
				width="90"
				height="1080"
				viewBox="0 0 90 1080"
			>
				<path d="m65.96-7.2-8.32 36.48c-8.32 36.48-24.96 109.44-33.28 182.4s-8.32 145.92 5.564 218.88c13.676 72.96 41.756 145.92 41.6 218.88C71.68 722.4 43.6 795.36 41 868.32s19.24 145.92 30.524 182.4L82.6 1087.2H-.6V-7.2Z" />
			</svg>
		</div>
	);
};
