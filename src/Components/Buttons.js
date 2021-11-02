import styled from 'styled-components';

export const Button = styled.button`
	padding: 10px 12px;
	font-size: 1rem;
	/* color: darkred; */
	border-radius: 2px;
	min-width: 70px;
	cursor: pointer;
	font-family: 'Menlo', monospace;
	&:hover {
		background-color: darkred;
	}
`;

export const PrimaryButton = styled(Button)`
	background-color: whitesmoke;
	border: bold;
	color: white;
	&:hover {
		background-color: darkred;
	}
`;
