import classNames from "classnames";
import { JSX } from "react";

import styles from "./waves.module.css";

export const FooterWave = (): JSX.Element => {
	return (
		<div className={classNames(styles.footerWave, styles.transformDown)}>
			<svg
				className={styles.darkPink}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path d="M0,32L60,58.7C120,85,240,139,360,170.7C480,203,600,213,720,186.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg>
		</div>
	);
};
