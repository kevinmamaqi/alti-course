import styled from 'styled-components';

export const CollapseStyled = styled.div`
	> p {
		max-height: 0;
		overflow: hidden;
	}

	.active > p {
		max-height: 100px;
	}
`;
