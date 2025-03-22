import classNames from "classnames";

import styles from "./waves.module.css";

export const AboutMeWave = () => {
	return (
		<div className={classNames(styles.navyWaveBackground, styles.transformUp)}>
			<svg
				className={styles.darkPink}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path d="M0,32L60,58.7C120,85,240,139,360,170.7C480,203,600,213,720,186.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>
		</div>
	);
};
