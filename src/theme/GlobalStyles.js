import styled from 'styled-components';

const BK = {
	sm: 480,
	md: 768,
	lg: 991,
	xl: 1200,
};

export const GenericContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	padding-top: 10px;
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
	background: url(${(props) => (props.backgroundUrl ? props.backgroundUrl : '')}) no-repeat center;
	min-height: ${(props) => (props.backgroundUrl ? '500px' : '0')};
	background-size: cover;
`;

export const Container = styled(GenericContainer)`
	padding-left: 24px;
	padding-right: 24px;
	width: 100%;
	max-width: 90%;
	@media (min-width: ${BK.xl}px) {
		max-width: 1100px;
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: -10px;
	margin-right: -10px;
`;

export const Col = styled.div`
	padding-left: 10px;
	padding-right: 10px;
	width: 100%;
`;
