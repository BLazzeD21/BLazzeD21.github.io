import styles from "./header.module.css";

import { LinkButton, Title } from "@/shared/UI";

import { Burger } from "@/widgets";

import { ParticlesBlock } from "@/widgets/Blocks";
import { HeaderWave } from "@/widgets/Waves";

export const Header = () => {
	return (
		<>
			<Burger />
			<ParticlesBlock value={100} />
			<header className={styles.wrapper} id="header">
				<div className="container">
					<div className={styles.block}>
						<Title size="18" darkPinkCircle>
							My name is Sekerin Alexandr
						</Title>
						<Title size="72" Tag="h1" className={styles.title}>
							I&apos;m web-developer from Saint-Petersburg
						</Title>
						<div className={styles.buttons}>
							<LinkButton link="#portfolio" buttonStyle="darkPink">
								Portfolio
							</LinkButton>
							<LinkButton link="#about">About me</LinkButton>
						</div>
					</div>
				</div>
				<HeaderWave />
			</header>
		</>
	);
};
