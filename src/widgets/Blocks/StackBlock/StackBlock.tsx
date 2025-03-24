import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";

import styles from "./stackBlock.module.css";

import { StackBlockProps } from "./stackBlock.props";

import { Title } from "@/shared/UI";

const levelClasses = {
	Basic: styles.basic,
	Intermediate: styles.intermediate,
	Advanced: styles.advanced,
};

export const StackBlock = ({ name, imageSrc, level }: StackBlockProps) => {
	const levels = useTranslations("Skills");

	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<Image src={imageSrc} alt={name} height={75} width={75} />
			</div>
			<Title size="20" className={styles.name}>
				{name}
			</Title>
			<div className={classNames(styles.level, levelClasses[level])}>{levels(level)}</div>
		</div>
	);
};
