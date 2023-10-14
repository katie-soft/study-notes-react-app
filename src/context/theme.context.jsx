import { createContext, useState } from 'react';

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeContext = createContext({
	theme: systemTheme });

export const ThemeContextProvider = ({ children }) => {

	const [theme, setTheme] = useState(systemTheme);

	return <ThemeContext.Provider value={{ theme, setTheme }}>
		{children}
	</ThemeContext.Provider>;
};