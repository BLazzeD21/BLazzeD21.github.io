import Image from "next/image";

import styles from "./educationBlock.module.css";

import { EducationBlockProps } from "./educationBlock.props";

import { Title } from "@/shared/UI";

import { getLinebBreaks } from "@/utils";

export const EducationBlock = ({ imageUrl, name, location, body }: EducationBlockProps) => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<div className={styles.icon}>
					<Image src={imageUrl} alt={name} width={25} height={25} />
				</div>
				<Title size="16">{name}</Title>
				<div className={styles.location}>{getLinebBreaks(location)}</div>
			</div>
			<div className={styles.body}>{getLinebBreaks(body)}</div>
		</div>
	);
};
