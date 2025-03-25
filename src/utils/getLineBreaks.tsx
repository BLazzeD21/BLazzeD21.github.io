import { v4 as uuidv4 } from "uuid";

export const getLinebBreaks = (text: string, separator: string) => {
	const textWithLineBreaks = text.split(separator).map(function (block) {
		const UUID = uuidv4();
		return (
			<span key={UUID}>
				{block.trim()}
				<br />
			</span>
		);
	});

	return textWithLineBreaks;
};
