import styled from 'styled-components'

export const StyledImagePreviewInterface = styled.div`
	padding: 1vw;
	top: 5vh;
	right: 5vw;
	z-index: 102;
    width: 98vw;
	background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    gap: 1vw;
`

export const InterfaceOption = styled.div`
    background-color: #000;
    border-radius: 5px;
    cursor: pointer;
    width: 320px;
    height: 320px;
`

export const InterfaceOptionImage = styled.img<{ border?: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: ${({ border }) => (border ? '4px solid #59C07B' : 'none')};
`
