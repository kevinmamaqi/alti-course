import React, {useState, useEffect, useRef} from 'react';
import {CollapsibleParagraphStyled} from './CollapsibleParagraph.styles';

function CollapsibleParagraph({title, text}) {
	const [showText, setShowText] = useState(false);
	const [paragraphHeight, setParagraphHeight] = useState(0);
	const paragraph = useRef(null);

	useEffect(() => {
		if (paragraph !== null) {
			setParagraphHeight(paragraph.current.scrollHeight);
		}
		function resizeHeight() {
			setParagraphHeight(paragraph.current.scrollHeight);
		}
		window.addEventListener('resize', resizeHeight);
		return () => {
			window.removeEventListener('resize', resizeHeight);
		};
	}, []);

	return (
		<CollapsibleParagraphStyled showText={showText} paragraphHeight={paragraphHeight}>
			<h3 onClick={() => setShowText(!showText)} className="title">
				{title}
			</h3>
			<div className="text" ref={paragraph}>
				{text}
			</div>
		</CollapsibleParagraphStyled>
	);
}

export default CollapsibleParagraph;
