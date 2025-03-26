"use client";

import { JSX, useEffect, useState } from "react";

import styles from "./customCursor.module.css";

import { Cursor } from "@/shared/Icons";

export const CustomCursor = (): JSX.Element => {
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

	const checkIfTouchDevice = (): boolean => {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia?.("(pointer: coarse)").matches;
	};

	useEffect(() => {
		setIsTouchDevice(checkIfTouchDevice());

		if (isTouchDevice) return;

		const moveCursor = (event: globalThis.MouseEvent): void => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		const handleHover = (event: globalThis.MouseEvent): void => {
			const target = event.target as HTMLElement;
			const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
			setIsHovered(interactiveTags.includes(target.tagName));
		};

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleHover);

		return (): void => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleHover);
		};
	}, [isTouchDevice]);

	const isCursorHidden = isTouchDevice || position.x === 0 || position.y === 0 || window.innerWidth - 7 < position.x;

	if (isCursorHidden) return <></>;

	return (
		<div
			className={`${styles.customCursor} ${isHovered ? styles.hovered : ""}`}
			style={{
				left: `${position.x + 17}px`,
				top: `${position.y + 21}px`,
			}}
		>
			<Cursor />
		</div>
	);
};
