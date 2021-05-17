import CollapsibleParagraph from 'components/units/CollapsibleParagraph/CollapsibleParagraph';
import {FooterColumnStyles, FooterStyles} from './Footer.styles';
import {FooterData} from 'utils/data';
import React from 'react';

function Footer() {
	return (
		<FooterStyles>
			<FooterColumnStyles>
				<h3>Cómo formar parte de</h3>
				<h4>Generación No Hunger</h4>
				{FooterData.map((f) => (
					<CollapsibleParagraph title={`Si eres ${f.role}`} text={f.text} />
				))}
			</FooterColumnStyles>
			<FooterColumnStyles>2nd column</FooterColumnStyles>
		</FooterStyles>
	);
}

export default Footer;
