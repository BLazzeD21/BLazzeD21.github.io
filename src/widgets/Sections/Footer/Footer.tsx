import Link from "next/link";

import styles from "./footer.module.css";

import { LinkButton } from "@/shared/UI";

import { SocialLink } from "@/widgets";

import { internalLinks, socialLinks } from "@/constants";

export const Footer = () => {
	return (
		<>
			<div className={styles.wave}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#9e579d"
						fillOpacity="1"
						d="M0,32L60,58.7C120,85,240,139,360,170.7C480,203,600,213,720,186.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
			<footer className={styles.footer} id="footer">
				<div className="container flex">
					<p className={styles.quote}>Living, learning, & leveling up one day at a time.</p>
					<div className="divider"></div>
					<div className={styles.social}>
						{socialLinks.map((socilLink, index) => (
							<SocialLink key={`footerLink-${index}`} item={socilLink} />
						))}
					</div>
					<div className={styles.buttons}>
						<LinkButton buttonStyle="navyBlue" link="https://t.me/BlazzeD21" target="">
							Contact us
						</LinkButton>
						<LinkButton
							buttonStyle="navyBlue"
							link="mailto:sekerin.alexandr@gmail.com?subject=Your Name - Title&body=Description of your offer"
							target="_blank"
						>
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
					<div className={styles.copyright}>&copy; Sekerin Alexandr, 2023. All Rights Reserved.</div>
				</div>
			</footer>
		</>
	);
};
