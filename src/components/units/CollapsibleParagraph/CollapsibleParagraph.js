import React, {useState} from 'react';
import {CollapsibleParagraphStyled} from './CollapsibleParagraph.styles';

function CollapsibleParagraph({title, text}) {
	const [showText, setShowText] = useState(false);

	return (
		<CollapsibleParagraphStyled showText={showText}>
			<h3 onClick={() => setShowText(!showText)} className="title">
				{title}
			</h3>
			<div className="text">{text}</div>
		</CollapsibleParagraphStyled>
	);
}

export default CollapsibleParagraph;
