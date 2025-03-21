"use client";

import classNames from "classnames";
import { useState } from "react";

import styles from "./burger.module.css";

import { Menu } from "@/widgets";

export const Burger = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<>
			<button
				className={classNames(styles.hamburger, {
					[styles.visible]: isShowMenu,
				})}
				onClick={() => setIsShowMenu(true)}
			>
				<span></span>
				<span className={styles.long}></span>
				<span></span>
			</button>
			<Menu isShow={isShowMenu} setIsShow={setIsShowMenu} />
		</>
	);
};
