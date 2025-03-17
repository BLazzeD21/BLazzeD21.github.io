import classNames from "classnames";
import Link from "next/link";

import styles from "./linkButton.module.css";

import { LinkButtonProps } from "./linkButton.props";

export const LinkButton = ({ link = "#", linkType = "transparent", className, children }: LinkButtonProps) => {
	return (
		<Link
			href={link}
			className={classNames(styles.link, className, {
				[styles.button]: linkType !== "transparent",
				[styles.navyBlue]: linkType === "navyBlue",
				[styles.darkPink]: linkType === "darkPink",
			})}
		>
			{children}
		</Link>
	);
};
