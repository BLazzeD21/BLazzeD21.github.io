import classNames from "classnames";

import styles from "./p.module.css";

import { PProps } from "./p.props";

const colorsClasses = {
	white: styles.white,
	gray: styles.gray,
};

const sizeClasses = {
	"24": styles.fz24,
	"20": styles.fz20,
};

export const P = ({ className, children, color = "white", size = "20" }: PProps) => {
	return <p className={classNames(styles.text, className, colorsClasses[color], sizeClasses[size], {})}>{children}</p>;
};
