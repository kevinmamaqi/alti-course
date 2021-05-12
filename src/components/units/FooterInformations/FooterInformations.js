import React, { Component } from 'react';

function FooterInformations({title, url}) {
    return (
        <FooterInformationsStyled className="FooterStuff">
            <h3>Si eres {title}</h3>
        </FooterInformationsStyled>
    );
}
        
    


export default FooterInformations;
