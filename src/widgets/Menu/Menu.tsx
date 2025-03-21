"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "./menu.module.css";

import { MenuProps } from "./menu.props";

import { SocialLink } from "@/widgets";

import { internalLinks, socialLinks } from "@/constants";

/* eslint-disable react-hooks/exhaustive-deps */

export const Menu = ({ isShow, setIsShow }: MenuProps) => {
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
					<nav>
						<ul className={styles.list}>
							{internalLinks.map((socialLink, index) => (
								<li key={`menu-${index}`} className={styles.link} onClick={() => setIsShow(false)}>
									<a href={socialLink.href}>{socialLink.name}</a>
								</li>
							))}
						</ul>
					</nav>

					<div className={styles.social}>
						{socialLinks.map((socialLink, index) => (
							<SocialLink item={socialLink} key={`menuSocialLinks-${index}`} iconType="circle" />
						))}
					</div>
				</div>
				<div className={styles.wave}>
					<svg xmlns="http://www.w3.org/2000/svg" width="90" height="1080" viewBox="0 0 90 1080">
						<path
							fill="#9e579d"
							d="m65.96-7.2-8.32 36.48c-8.32 36.48-24.96 109.44-33.28 182.4s-8.32 145.92 5.564 218.88c13.676 72.96 41.756 145.92 41.6 218.88C71.68 722.4 43.6 795.36 41 868.32s19.24 145.92 30.524 182.4L82.6 1087.2H-.6V-7.2Z"
						/>
					</svg>
				</div>
				<div className={styles.overlay}></div>
			</div>
		</>
	);
};
