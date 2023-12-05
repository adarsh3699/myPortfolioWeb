import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// import myLogoImg from './img/logo.png';
import myLogoImg from './img/newLogo.webp';
import instaLogo from './img/instagramWhite.svg';
import youtubeLogo from './img/youtubeWhite.svg';
import mobileMenuIcon from './img/menu.png';

import './bar.css';

function Bar() {
	const mobileIconRef = useRef();

	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

	//component did mount
	useEffect(function () {
		document.addEventListener('click', handleClickOutside, true);

		//component did un-mount
		return function () {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	function handleClickOutside(e) {
		if (mobileIconRef.current && !mobileIconRef.current.contains(e.target)) {
			setIsMobileMenuVisible(false);
		}
	}

	function handleMobileMenuClick() {
		setIsMobileMenuVisible(!isMobileMenuVisible);
	}

	return (
		<div id="bar">
			<div id="topBar">
				<div id="logo">
					<a href="/">
						<img src={myLogoImg} alt="" />
						<div>
							<span id="adarsh">darsh </span>Suman
						</div>
					</a>
				</div>

				<div id="desktopMenu">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/works">Works</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</div>

				<div id="social">
					<a href="https://www.instagram.com/_adarsh.s/" target="_blank" rel="noreferrer">
						<img src={instaLogo} alt="" />
					</a>
					<a href="https://www.youtube.com/channel/UCkdSVbjY4sS1I7hw9ZJMdew" target="_blank" rel="noreferrer">
						<img src={youtubeLogo} alt="" />
					</a>
				</div>

				<div id="mobileIcon" onClick={handleMobileMenuClick} ref={mobileIconRef}>
					<img src={mobileMenuIcon} alt="" />
				</div>
			</div>

			{isMobileMenuVisible ? (
				<div id="mobileMenu">
					<NavLink to="/" style={{ borderTop: '1px #f1f1f1 solid' }}>
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/works">Works</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</div>
			) : null}
		</div>
	);
}

export default Bar;
