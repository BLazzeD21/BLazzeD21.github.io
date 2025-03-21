import styles from "./page.module.css";

import { LinkButton, P, Title } from "@/shared/UI";

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<P className={styles.background}>404</P>
			<Title size="56" Tag="h1">
				Not Found
			</Title>
			<P size="20">Could not find requested resource</P>
			<LinkButton href="/" buttonStyle="navyBlue">
				Return Home
			</LinkButton>
		</div>
	);
}
