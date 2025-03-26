import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./header.module.css";

import { HeaderProps } from "./header.props";

import { LinkButton, Title } from "@/shared/UI";

import { Burger } from "@/widgets";

import { ParticlesBlock } from "@/widgets/Blocks";
import { HeaderWave } from "@/widgets/Waves";

export const Header = ({ internalLinks, socialLinks }: HeaderProps): JSX.Element => {
	const text = useTranslations("Header");

	return (
		<>
			<Burger internalLinks={internalLinks} socialLinks={socialLinks} />
			<ParticlesBlock value={100} />
			<header className={styles.wrapper} id="header">
				<div className="container">
					<div className={styles.block}>
						<Title size="18" darkPinkCircle>
							{text("welcome")}
						</Title>
						<Title size="72" Tag="h1" className={styles.title}>
							{text("title")}
						</Title>
						<div className={styles.buttons}>
							<LinkButton link="#portfolio" buttonStyle="darkPink" scroll>
								{text("portfolioButton")}
							</LinkButton>
							<LinkButton link="#about" scroll>
								{text("aboutMeButton")}
							</LinkButton>
						</div>
					</div>
				</div>
				<HeaderWave />
			</header>
		</>
	);
};
