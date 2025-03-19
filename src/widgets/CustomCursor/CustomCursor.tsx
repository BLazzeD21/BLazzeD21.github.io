"use client";

import { useEffect, useState } from "react";

import styles from "./customCursor.module.css";

import { Cursor } from "@/shared/Icons";

export const CustomCursor = () => {
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState<boolean>(false);

	useEffect(() => {
		const moveCursor = (event: globalThis.MouseEvent) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		const handleHover = (event: globalThis.MouseEvent) => {
			const target = event.target as HTMLElement;

			const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];

			if (interactiveTags.includes(target.tagName)) {
				setIsHovered(true);
			} else {
				setIsHovered(false);
			}
		};

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleHover);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleHover);
		};
	}, []);

	const isCursorHidden = position.x === 0 || position.y === 0 || window.innerWidth - 7 < position.x;
	if (isCursorHidden) return <></>;

	return (
		<div
			className={`${styles.customCursor} ${isHovered ? styles.hovered : ""}`}
			style={{
				left: `${position.x + 6}px`,
				top: `${position.y + 25}px`,
			}}>
			<Cursor />
		</div>
	);
};
