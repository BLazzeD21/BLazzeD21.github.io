import { JSX } from "react";

import styles from "./styles.module.css";

export default function Loading(): JSX.Element {
	return (
		<div className={styles.page}>
			<div className={styles.loader}></div>
		</div>
	);
}
