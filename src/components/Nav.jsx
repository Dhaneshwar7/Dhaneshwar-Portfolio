import React from 'react';
import { Link } from 'react-router-dom';

import ThemeBtn from './ThemeBtn';

const Nav = () => {
	return (
		<div>
			<div className="logoName">
				<h2>Dhaneshwar</h2>
			</div>
			<div className="navBars">
				<ul>
					<li>
						{/* <Link to="/work">Work</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link> */}
					</li>
				</ul>
				<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
					{/* ThemeBtn */}
					<ThemeBtn />
				</div>
			</div>
		</div>
	);
};

export default Nav;
