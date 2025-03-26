import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./sidepanel.module.css";

import { SidepanelProps } from "./sidepanel.props";

import { SocialLink } from "@/widgets";

export const Sidepanel = ({ socialLinks }: SidepanelProps): JSX.Element => {
	const text = useTranslations("Sidepanel");

	return (
		<aside className={styles.sidepanel}>
			{socialLinks.map((socialItem, index) => {
				return <SocialLink key={`sidepanelLink-${index}`} item={socialItem} iconType="circle" />;
			})}
			<div className={styles.devider}></div>
			<div className={styles.text}>
				<span>{text("label")}</span>
			</div>
		</aside>
	);
};
