import styled from 'styled-components'
import Webcam from 'react-webcam'

export const StyledWebcam = styled(Webcam)`
	width: 100%;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
`
export const StyledButton = styled.button`
	position: fixed;
	bottom: 5%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	border: none;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	background-image: radial-gradient(#fff 50%, transparent 52%),
		radial-gradient(#fff 50%, transparent 52%);
`
