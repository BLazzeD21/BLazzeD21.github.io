import Image from "next/image";

import styles from "./skillsBlock.module.css";

import { P, Title } from "@/shared/UI";

type Props = {
	title: string;
	imageSrc: string;
	description: string;
};

export const SkillBlock = ({ title, imageSrc, description }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={imageSrc} alt={title} width={30} height={30} />
			</div>
			<div>
				<Title Tag="h3" size="22">
					{title}
				</Title>
				<P color="gray" size="20" className={styles.description}>
					{description}
				</P>
			</div>
		</div>
	);
};
