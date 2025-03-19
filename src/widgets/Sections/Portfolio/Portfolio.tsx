import styles from "./portfolio.module.css";

import { Title } from "@/shared/UI";

import { PortfolioBlock } from "@/widgets/Blocks";

import { portfolioItems } from "@/constants";

export const Portfolio = () => {
	return (
		<section className={styles.portfolio} id="portfolio">
			<div className="container">
				<div className="flex">
					<Title Tag="h3" size="18" darkPinkCircle isCircleCenter>
						Portfolio
					</Title>
					<Title Tag="h3" size="48" className={styles.title}>
						My non-commercial projects
					</Title>
					<div className="divider darkPink"></div>
					<div className={styles.wrapper}>
						{portfolioItems.map((item, index) => {
							return <PortfolioBlock item={item} key={index} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
