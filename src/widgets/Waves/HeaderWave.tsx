import classNames from "classnames";

import styles from "./waves.module.css";

export const HeaderWave = () => {
	return (
		<svg
			className={classNames(styles.headerWave, styles.darkPink)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
		>
			<path d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
		</svg>
	);
};
