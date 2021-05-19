import styled from 'styled-components';

export const NavigationStyled = styled.nav`
    display:flex;
    align-items:center;
	width:100%;
    @media(min-width: 992px) {
        .hamburger{
            display:none;
        }
    }
    ul{
        margin-left:auto;
        list-style-type:none;
        display:flex;

        li{
            padding-left:50px;
        }
    }

    
`;
