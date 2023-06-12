import styled from 'styled-components'

export const FinishedViewContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`
export const StyledImagePreview = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8rem;
`
export const StyledImage = styled.img`
	max-width: 40rem;
	object-fit: contain;
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
	margin-top: 2rem;
`
