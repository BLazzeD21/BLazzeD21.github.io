"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "./menu.module.css";

import { MenuProps } from "./menu.props";

import { SocialLink } from "@/widgets";

import "@/widgets/Locale";
import { LocaleSwitcher } from "@/widgets/Locale";
import { MenuWave } from "@/widgets/Waves";

/* eslint-disable react-hooks/exhaustive-deps */

export const Menu = ({ isShow, setIsShow, internalLinks, socialLinks }: MenuProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent): void => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			setIsShow(false);
		}
	};

	const handlePressEscape = (event: KeyboardEvent): void => {
		if (event.key === "Escape") {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener("click", handleClickOutside);
		document.body.addEventListener("keydown", handlePressEscape);
		return () => {
			document.body.removeEventListener("click", handleClickOutside);
			document.body.removeEventListener("keydown", handlePressEscape);
		};
	}, []);

	return (
		<>
			<div
				className={classNames(styles.wrapper, {
					[styles.active]: isShow,
				})}
			>
				<div className={styles.menu} ref={modalRef}>
					<div className={styles.close} onClick={() => setIsShow(false)}>
						<Image src="icons/close.svg" alt="close" width={30} height={30} />
					</div>
					<div className={styles.main}>
						<nav>
							<ul className={styles.list}>
								{internalLinks.map((socialLink, index) => (
									<li key={`menu-${index}`} className={styles.link} onClick={() => setIsShow(false)}>
										<a href={socialLink.href}>{socialLink.name}</a>
									</li>
								))}
							</ul>
						</nav>
						<div className={styles.footer}>
							<div className={styles.social}>
								{socialLinks.map((socialLink, index) => (
									<SocialLink item={socialLink} key={`menuSocialLinks-${index}`} iconType="circle" />
								))}
							</div>
							<LocaleSwitcher />
						</div>
					</div>
				</div>
				<MenuWave />
				<div className={styles.overlay}></div>
			</div>
		</>
	);
};
