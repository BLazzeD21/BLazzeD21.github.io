import classNames from "classnames";
import Link from "next/link";

import styles from "./linkButton.module.css";

import { LinkButtonProps } from "./linkButton.props";

export const LinkButton = ({
	link = "#",
	buttonStyle = "transparent",
	className,
	children,
	...props
}: LinkButtonProps) => {
	return (
		<Link
			href={link}
			className={classNames(styles.link, className, {
				[styles.button]: buttonStyle !== "transparent",
				[styles.navyBlue]: buttonStyle === "navyBlue",
				[styles.darkPink]: buttonStyle === "darkPink",
			})}
			{...props}
		>
			{children}
		</Link>
	);
};
