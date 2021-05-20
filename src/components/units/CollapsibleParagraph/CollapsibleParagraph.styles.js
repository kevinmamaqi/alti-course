import styled from 'styled-components';

export const CollapsibleParagraphStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;

	.title {
		position: relative;
		width: auto;

		&:hover {
			cursor: pointer;
			&::before {
				width: calc(100% - 30px);
			}
		}

		&::before {
			content: '';
			border-bottom: 3px #333 solid;
			width: 0px;
			transition: width 0.5s ease;
			position: absolute;
			left: 0;
			bottom: -3px;
		}
	}

	.text {
		overflow: hidden;
		max-height: ${(props) =>
			props.showText ? (props.paragraphHeight ? props.paragraphHeight + 'px' : '100px') : 0};
		transition: max-height 0.5s ease;
	}
`;
