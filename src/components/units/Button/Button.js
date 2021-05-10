import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

// Styles
import {ButtonStyled} from './Button.styles';

// 1. Make the icon available from the parent component
// 2. Programatically style the icon
// 3. Programatically choose the position
// 4. To show a spinner while it's loading

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
