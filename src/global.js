import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--lightorange: #fdb641;
		--rust: #b03a0c;
		--lightborange: #efa23a;
	}

	html,
	body {
		margin: 0;
		padding: 0;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		margin-bottom: 15px;
    background-color: var(--lightorange);
		text-rendering: optimizeLegibility;
	}

	main {
		display: grid;
		grid-gap: 1rem;
		max-width: 1900px;
		padding: 0 1.5rem;
		margin: 1.5rem auto
	}

	fieldset {
		border: none;
	}

	a {
		text-decoration: none;
	}

	h1,h2,h3,h4,h5,h6 {
		margin: 0;
	}

	h6 {
		font-size: 14px;
	}

`;
