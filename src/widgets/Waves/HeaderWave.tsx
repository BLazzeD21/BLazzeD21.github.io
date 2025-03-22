import classNames from "classnames";

import styles from "./waves.module.css";

export const HeaderWave = () => {
	return (
		<svg
			className={classNames(styles.headerWave, styles.darkPink, styles.transformDown)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			preserveAspectRatio="none"
		>
			<path d="M0,160L48,165.3C96,171,192,181,288,154.7C384,128,480,64,576,74.7C672,85,768,171,864,208C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
		</svg>
	);
};
