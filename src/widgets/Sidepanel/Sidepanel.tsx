import styles from "./sidepanel.module.css";

import { socialLinks } from "@/constants";

import { SocialLink } from "../SocialLink/SocialLink";

export const Sidepanel = ({}) => {
	return (
		<aside className={styles.sidepanel}>
			{socialLinks.map((socialItem, index) => {
				return <SocialLink key={`sidepanelLink-${index}`} item={socialItem} iconType="circle" />;
			})}
			<div className={styles.devider}></div>
			<div className={styles.text}>
				<span>Social networks</span>
			</div>
		</aside>
	);
};
