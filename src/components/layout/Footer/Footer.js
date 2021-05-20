import CollapsibleParagraph from 'components/units/CollapsibleParagraph/CollapsibleParagraph';
import {FooterData} from 'utils/data';
import {Container, Row, Col} from 'theme/GlobalStyles';
import React from 'react';

function Footer() {
	return (
		<Container>
			<Row>
				<Col>
					<h3>Cómo formar parte de</h3>
					<h4>Generación No Hunger</h4>
					{FooterData.map((f, idx) => (
						<CollapsibleParagraph key={idx} title={`Si eres ${f.role}`} text={f.text} />
					))}
				</Col>
				<Col>
					<h3>Contacta</h3>
					<div>E-mail: accioncontraelhambre.com</div>
					<div>Teléfono: 666 666 666</div>
					<h3>Siguenos</h3>
					<img src="" alt="ig" />
					<img src="" alt="fb" />
					<hr />
					<div>Terminos y condiciones</div>
					<div>Politica de privacidad</div>
					<div>Cookies</div>
					<hr />
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
