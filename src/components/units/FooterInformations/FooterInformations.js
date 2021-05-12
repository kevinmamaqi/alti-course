import React, {Component} from 'react';

//style
import {FooterInformationsStyled} from '../FooterInformations/FooterInformations.styles';

function FooterInformations({role}) {
	console.log(role);
	return (
		<FooterInformationsStyled className="FooterStuff">
			<h3>Si eres {role}</h3>
		</FooterInformationsStyled>
	);
}

export default FooterInformations;
