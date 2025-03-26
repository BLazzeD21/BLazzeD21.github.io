import classNames from "classnames";
import { JSX } from "react";

import styles from "./waves.module.css";

export const EducationWave = (): JSX.Element => {
	return (
		<div className={classNames(styles.darkWaveBackground, styles.transformUp)}>
			<svg
				className={styles.navyBlue}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path d="M0,224L60,240C120,256,240,288,360,261.3C480,235,600,149,720,128C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>
		</div>
	);
};
