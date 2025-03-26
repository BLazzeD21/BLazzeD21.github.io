import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import styles from "./portfolioBlock.module.css";

import { PortfolioBlockProps } from "./portfolioBlock.props";

export const PortfolioBlock = ({ item, soonText }: PortfolioBlockProps): JSX.Element => {
	const ImageBlock = item.imageSrc ? (
		<img src={item.imageSrc} alt={item.altText} />
	) : (
		<div className={styles.soon}>
			<p>{soonText}</p>
		</div>
	);

	return (
		<div
			className={classNames(styles.item, {
				[styles.opacity]: item.altText === "soon",
			})}
			style={{
				gridColumn: item.gridColumn,
				gridRow: item.gridRow,
			}}
		>
			{item.githubLink && (
				<Link href={item.githubLink} className={styles.github} target="_blank">
					<Image src="/icons/social/github.svg" alt="github" width={60} height={60} />
				</Link>
			)}
			{item.projectLink ? (
				<Link href={item.projectLink} className={styles.link} target="_blank">
					{ImageBlock}
				</Link>
			) : (
				<>{ImageBlock}</>
			)}
		</div>
	);
};
