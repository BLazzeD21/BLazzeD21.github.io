import Link from "next/link";

import styles from "./footer.module.css";

import { FooterProps } from "./footer.props";

import { LinkButton } from "@/shared/UI";

import { SocialLink } from "@/widgets";

export const Footer = ({ socialLinks, internalLinks }: FooterProps) => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className={styles.footer} id="footer">
				<div className="container flex">
					<p className={styles.quote}>Living, learning, & leveling up one day at a time.</p>
					<div className="divider"></div>
					<div className={styles.social}>
						{socialLinks.map((socilLink, index) => (
							<SocialLink key={`footerLink-${index}`} item={socilLink} className={styles.socialLink} />
						))}
					</div>
					<div className={styles.buttons}>
						<LinkButton buttonStyle="navyBlue" link="https://t.me/BlazzeD21" target="">
							Contact us
						</LinkButton>
						<LinkButton
							buttonStyle="navyBlue"
							link="mailto:sekerin.alexandr@gmail.com?subject=Your Name - Title&body=Description of your offer"
							target="_blank">
							E-mail
						</LinkButton>
					</div>
					<div className={styles.menu}>
						<ul className={styles.list}>
							{internalLinks.map((item, index) => (
								<li className={styles.menuItem} key={`footerLinks-${index}`}>
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.copyright}>&copy; Sekerin Alexandr, {year}. All Rights Reserved.</div>
				</div>
			</footer>
		</>
	);
};
