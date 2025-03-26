import { useEffect, useState } from "react";

type Sizes = {
	width: number | undefined;
	height: number | undefined;
};

export const useWindowSize = (): Sizes => {
	const [windowSize, setWindowSize] = useState<Sizes>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = (): void => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return (): void => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};
