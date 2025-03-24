"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useState } from "react";

import styles from "./stackAccordion.module.css";

import { StackAccordionProps } from "./stackAccordion.props";

import { StackBlock } from "@/widgets/Blocks";

import { Levels } from "@/types";

import { sortSkillsByLevel } from "@/utils";

export const StackAccordion = ({ stack }: StackAccordionProps) => {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

	const stackTitles = useTranslations("StackTitles");

	const toggleCategory = (category: string) => {
		setExpandedCategory((prev) => (prev === category ? null : category));
	};

	return (
		<div className={styles.accordion}>
			{Object.entries(stack).map(([category, skills]) => {
				const categoryLocate = stackTitles(category);

				return (
					<div key={categoryLocate} className={styles.category}>
						<button className={styles.header} onClick={() => toggleCategory(categoryLocate)}>
							<h2>{categoryLocate}</h2>
							<span className={classNames(styles.arrow, { [styles.open]: expandedCategory === categoryLocate })}>
								▼
							</span>
						</button>
						<div className={classNames(styles.content, { [styles.open]: expandedCategory === categoryLocate })}>
							<div className={styles.wrapper}>
								{skills.sort(sortSkillsByLevel).map((technology, index) => (
									<StackBlock
										key={index}
										name={technology.name}
										imageSrc={technology.imageSrc}
										level={Levels[technology.level]}
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
