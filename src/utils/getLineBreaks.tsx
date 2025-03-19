import { v4 as uuidv4 } from "uuid";

export const getLinebBreaks = (text: string) => {
	const textWithLineBreaks = text.split("<br />").map(function (block) {
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
