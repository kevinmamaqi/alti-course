import React from 'react';
import Collapse from 'components/units/Collapse/Collapse';
import {FooterStyled} from './Footer.styles';
import {Container} from 'theme/GlobalStyles';
function Footer() {
	return (
	<>
		<Container>
			<FooterStyled>
				
				<div className="">
					<h2>
						Como formar parte de
						<br />
						<b>Generaciòn no hunger</b>
					</h2>
					<Collapse
						title="titolo1"
						desc=" Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
					/>
					<Collapse title="titolo2" desc="lorem" />
					<Collapse title="titolo3" desc="lorem" />
				</div>

				<div className="contacta">
					<h2><b>Contacta</b></h2>
					<p>Email <a href="mailto:accioncontraelhambre.com">accioncontraelhambre.com</a><br/>
					   Telefono: 666 666 666
					</p>
				</div>
								
			</FooterStyled>
		</Container>
		
	</>
	);
}

export default Footer;
