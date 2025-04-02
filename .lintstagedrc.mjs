/* eslint-disable @typescript-eslint/explicit-function-return-type */
import path from "path";

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const config = {
	"*.{js,jsx,ts,tsx}": ["prettier --write", buildEslintCommand],
	"*.css": ["prettier --write", "stylelint --fix"],
};

export default config;
