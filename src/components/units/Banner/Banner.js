import React, {useState, useEffect} from 'react';

// Styles
import {BannerStyled} from './Banner.styles';

function Banner({img, hoverTitle, hoverText, ctaText, ctaUrl}) {
	return (
		<BannerStyled>
			<img src={img} />
		</BannerStyled>
	);
}

export default Banner;
