import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
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
		margin-bottom: 25px;
    background-color: var(--lightorange);
		text-rendering: optimizeLegibility;
	}

	main {
		display: grid;
		grid-gap: 3rem;
		max-width: 1900px;
		padding: 0 1.5rem;
		margin: 2rem auto
	}

	fieldset {
		border: none;
	}

`;
