"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

import styles from "./pageUp.module.css";

import { Arrow } from "@/shared/Icons";

export const PageUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={classNames(styles.pageUp, {
				[styles.visible]: isVisible,
			})}
			onClick={scrollToTop}
		>
			<Arrow />
		</div>
	);
};
