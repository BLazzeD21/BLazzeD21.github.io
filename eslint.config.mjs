import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslint = [
	js.configs.recommended,
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			"react-hooks/exhaustive-deps": "off",
			semi: ["error", "always"],
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/no-empty-interface": [
				"error",
				{
					allowSingleExtends: false,
				},
			],
			"@next/next/no-img-element": "off",
		},
	},
];

export default eslint;
