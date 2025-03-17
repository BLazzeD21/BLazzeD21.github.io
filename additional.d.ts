declare module "*.svg" {
	import { FC, SVGProps } from "react";
	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

declare module "*.jpg" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module "*.svg?url" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module "*.jpg?url" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module "*.png?url" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module "*.png?url" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}
