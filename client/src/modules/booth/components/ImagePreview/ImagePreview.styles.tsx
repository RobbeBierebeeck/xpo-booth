import styled from 'styled-components'

export const StyledImagePreview = styled.div`
	position: fixed;
	padding: 20px;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	z-index: 102;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 50px 0 rgba(155, 149, 149, 0.53);
`
export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`
export const StyledButton = styled.button<{ isPrimary?: boolean }>`
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	cursor: pointer;
	background-color: ${({ isPrimary }) => (isPrimary ? '#000' : '#fff')};
	color: ${({ isPrimary }) => (isPrimary ? '#fff' : '#000')};
	font-size: 16px;
	font-weight: 600;
	margin-right: 10px;
`
