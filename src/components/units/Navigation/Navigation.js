import React, {useState, useEffect, useRef} from 'react';
import {NavigationStyled} from './Navigation.styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navigation() {
	return (
		<NavigationStyled>
            <div class="logo">LOGO</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
			</ul>
            <div class="hamburger">H</div>
		</NavigationStyled>
	);
}

export default Navigation;
