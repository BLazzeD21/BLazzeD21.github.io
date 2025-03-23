import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./portfolioBlock.module.css";

import { PortfolioBlockProps } from "./portfolioBlock.props";

export const PortfolioBlock = ({ item }: PortfolioBlockProps) => {
	const ImageBlock = item.imageSrc ? (
		<Image src={item.imageSrc} alt={item.altText} width={280} height={280} sizes="100%" quality={100} />
	) : (
		<div className={styles.soon}>
			<p>soon</p>
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
