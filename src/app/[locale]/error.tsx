"use client";

import styles from "./page.module.css";

import { LinkButton, P, Title } from "@/shared/UI";

export default function Error() {
	return (
		<div className={styles.page}>
			<P className={styles.background}>{"Err"}</P>
			<Title size="56" Tag="h1">
				Error
			</Title>
			<P size="20">There was an error</P>
			<LinkButton href="/en" buttonStyle="navyBlue">
				Return Home
			</LinkButton>
		</div>
	);
}
