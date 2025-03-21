import styles from "./header.module.css";

import { LinkButton, Title } from "@/shared/UI";

import { Burger } from "@/widgets";

import { ParticlesBlock } from "@/widgets/Blocks";

export const Header = () => {
	return (
		<>
			<Burger />
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
						<LinkButton link="#portfolio" buttonStyle="darkPink">
							Portfolio
						</LinkButton>
						<LinkButton link="#about">About me</LinkButton>
					</div>
				</div>
				<svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#9e579d"
						fillOpacity="1"
						d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
					></path>
				</svg>
			</header>
		</>
	);
};
