import Image from "next/image";

import styles from "./photo.module.css";

export const Photo = () => {
	return (
		<div className={styles.photo}>
			<div className={styles.wrapper}>
				<Image src="/img/me.jpg" alt="me" width={853} height={1280} quality={100} />
			</div>
		</div>
	);
};
