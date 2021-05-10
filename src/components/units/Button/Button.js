import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Styles
import {ButtonStyled} from './Button.styles';

function Button({
	text,
	loadingText,
	textStyles,
	buttonStyles,
	iconStyles,
	icon,
	iconPosition,
	iconLoading,
	showSpinner,
	isLoading = false,
	onClick,
}) {
	const handleClick = () => {
		if (isLoading) {
			return;
		}
		onClick();
	};

	return (
		<ButtonStyled
			className="red-button"
			onClick={handleClick}
			disabled={isLoading}
			style={{...buttonStyles}}
			iconPosition={iconPosition}
		>
			{iconPosition === 'left' || iconPosition === 'right' ? (
				<FontAwesomeIcon
					icon={isLoading && showSpinner ? iconLoading : icon}
					style={{iconStyles}}
					spin={showSpinner}
				/>
			) : null}
			<span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
		</ButtonStyled>
	);
}

export default Button;
