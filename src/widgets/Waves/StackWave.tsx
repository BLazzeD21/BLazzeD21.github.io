import classNames from "classnames";

import styles from "./waves.module.css";

export const StackWave = () => {
	return (
		<div className={classNames(styles.navyWaveBackground, styles.transformUp)}>
			<svg
				className={styles.darkPink}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path d="M0,224L60,192C120,160,240,96,360,96C480,96,600,160,720,192C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>
		</div>
	);
};
