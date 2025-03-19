"use client";

import classNames from "classnames";
import { useState } from "react";

import styles from "./stackAccordion.module.css";

import { StackAccordionProps } from "./stackAccordion.props";

import { StackBlock } from "@/widgets/Blocks";

import { sortSkillsByLevel } from "@/utils";

export const StackAccordion = ({ stack }: StackAccordionProps) => {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

	const toggleCategory = (category: string) => {
		setExpandedCategory((prev) => (prev === category ? null : category));
	};

	return (
		<div className={styles.accordion}>
			{Object.entries(stack).map(([category, skills]) => {
				return (
					<div key={category} className={styles.category}>
						<button className={styles.header} onClick={() => toggleCategory(category)}>
							<h2>{category}</h2>
							<span className={classNames(styles.arrow, { [styles.open]: expandedCategory === category })}>▼</span>
						</button>
						<div className={classNames(styles.content, { [styles.open]: expandedCategory === category })}>
							<div className={styles.wrapper}>
								{skills.sort(sortSkillsByLevel).map((technology, index) => (
									<StackBlock
										key={index}
										name={technology.name}
										imageSrc={technology.imageSrc}
										level={technology.level}
									/>
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
