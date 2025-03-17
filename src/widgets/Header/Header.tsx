import { ParticlesBlock } from "@/widgets";

import styles from "./header.module.css";

import { LinkButton, Title } from "@/shared/UI";

export const Header = () => {
	return (
		<>
			<ParticlesBlock value={100} />
			<header className={styles.wrapper} id="header">
				<div className="container">
					<Title size="18" darkPinkCircle>
						My name is Sekerin Alexandr
					</Title>
					<Title size="72" Tag="h1" className={styles.title}>
						I&apos;m web-developer from Saint-Petersburg
					</Title>
					<div className={styles.buttons}>
						<LinkButton link="#portfolio" linkType="darkPink">
							Portfolio
						</LinkButton>
						<LinkButton link="#about">About me</LinkButton>
					</div>
				</div>
			</header>
		</>
	);
};
