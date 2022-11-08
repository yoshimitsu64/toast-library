import styled from "styled-components"

export const StyledNotification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.backgroundColor};
    width: 200px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
    position: fixed;
    bottom:0;
    right: 0;
`

export const StyledCross = styled.div`
    align-self: flex-start;
`