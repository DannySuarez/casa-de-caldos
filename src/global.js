import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

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
    background-color: #fdb641;
		text-rendering: optimizeLegibility;
		overflow: hidden;
	}

`;
