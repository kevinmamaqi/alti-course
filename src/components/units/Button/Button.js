import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

// Styles
import {ButtonStyled} from './Button.styles';

function Button({text, loadingText, isLoading = false, onClick}) {
	const handleClick = () => {
		if (isLoading) {
			return;
		}
		onClick();
	};

	return (
		<ButtonStyled className="red-button" onClick={handleClick} disabled={isLoading}>
			<FontAwesomeIcon icon={faUser} />
			{isLoading ? loadingText : text}
		</ButtonStyled>
	);
}

export default Button;
