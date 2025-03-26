import { JSX } from "react";

export const Cursor = (): JSX.Element => (
	<svg width={50} height={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m3.1 4.46 7.21 15.92A1.17 1.17 0 0 0 12.5 20l1.26-6.23L20 12.5a1.17 1.17 0 0 0 .39-2.19L4.46 3.1A1 1 0 0 0 3.1 4.46Z"
			fill="var(--pink-color)"
			style={{ stroke: "var(--gray-color)", strokeWidth: 1.3 }}
		/>
	</svg>
);
