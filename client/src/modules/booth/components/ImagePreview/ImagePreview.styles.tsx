import styled from 'styled-components'

export const StyledImagePreview = styled.div`
	padding: 20px;
	top: 5vh;
	left: 2vw;
	height: 60vh;
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
	margin-top: -50px;
`
export const StyledButton = styled.button<{ isPrimary?: boolean; disabled?: boolean }>`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ isPrimary, disabled }) => {
    if (disabled) return '#ccc';
    return isPrimary ? '#EF865A' : '#fff';
  }};
  color: ${({ isPrimary, disabled }) => (disabled ? '#999' : isPrimary ? '#fff' : '#000')};
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  
  /* Optional: Add more specific disabled styles */
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  /* Additional disabled styles you may want to apply */
`;

export const StyledImagePreviewTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  position: fixed;
  top: 4vh;
  left: 2vw;
  z-index: 69;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 2em;
`;