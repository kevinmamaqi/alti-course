import React from 'react';
import {CollapseStyled} from './Collapse.style';



function Collapse({title, desc, isActive=""}){

    const handleClick = () => {
        isActive=true;
    };
    return (
        <CollapseStyled onClick={handleClick}>
            <h4>{title}</h4>
            <p>{desc}</p>
        </CollapseStyled>
    );
}

export default Collapse;