import Image from "next/image";
import Link from "next/link";

import styles from "./sidepanel.module.css";

import { SocialLinkProps } from "./sidepanel.props";

import { socialLinks } from "@/constants";

export const SocialLink = ({ item }: SocialLinkProps) => {
	return (
		<Link href={item.link} className={styles.link} target="_blank" aria-label={`Visit my ${item.name}`}>
			<Image src={item.icon} alt={item.name} width={35} height={35} priority />
		</Link>
	);
};

export const Sidepanel = ({}) => {
	return (
		<aside className={styles.sidepanel}>
			{socialLinks.map((socialItem) => {
				return <SocialLink key={socialItem.id} item={socialItem} />;
			})}
			<div className={styles.devider}></div>
			<div className={styles.text}>
				<span>Social networks</span>
			</div>
		</aside>
	);
};
