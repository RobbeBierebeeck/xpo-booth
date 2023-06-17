import styled from 'styled-components'

export const FinishedViewContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`
export const StyledImagePreview = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8rem;
	@media (max-width: 1200px) {
		margin-top: 2rem;
		flex-direction: column;
	}
`
export const StyledHeading = styled.h2`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 2rem;
	text-align: center;
	font-family: 'Roboto', sans-serif;
`

export const StyledImage = styled.img`
	max-width: 40rem;
	object-fit: contain;
	width: 100%;
`

export const StyledButton = styled.button`
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	cursor: pointer;
	background-color: #000;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	margin-top: 4rem;
`
