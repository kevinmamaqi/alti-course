import styled from 'styled-components';

export const ModalStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	overflow: hidden;
	padding: 0;
	margin: 0;

	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
	}

	.container {
		display: flex;
		flex-direction: column;
		min-width: 40%;
		max-width: 90%;
		min-height: 350px;
		max-height: 90%;
		background-color: #fff;
		z-index: 1000;
		border-radius: 6px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
	}
`;
