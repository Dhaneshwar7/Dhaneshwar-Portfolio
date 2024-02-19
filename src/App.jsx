import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ThemeProvider } from './contexts/Theme';
import Card from './components/Card';
// import ThemeBtn from './components/ThemeBtn';
import Nav from './components/Nav';

function App() {
	const [themeMode, setThemeMode] = useState('light');
	const darkMode = () => {
		setThemeMode('dark');
	};
	const lightMode = () => {
		setThemeMode('light');
	};

	// // /* Actual Change in Theme */
	useEffect(() => {
		const theme = JSON.parse(localStorage.getItem('theme'));
		setThemeMode(theme);
	}, []);

	useEffect(() => {
		// document.querySelector('html').classList.remove('light', 'dark');

		document.querySelector('html').classList.add(themeMode);
		localStorage.setItem('theme', JSON.stringify(themeMode));
	}, [themeMode]);

	return (
		<>
			<ThemeProvider value={{ themeMode, darkMode, lightMode }}>
				<div className="w-screen min-h-screen px-12">
					<Nav />
					<div className="flex flex-wrap min-h-screen items-center">
						<div className="w-full">
							<div className="w-full max-w-sm mx-auto">
								{/* Card */}
								<Card />
							</div>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
