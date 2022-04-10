import styled from "styled-components";


export const StyledHeader = styled.header`
position: ${({ isRelative }) => isRelative ? 'relative' : 'fixed'};
height: auto;
background: lightseagreen;
color: #0018a8;
text-align: center;
width: 100%;
top: 0;
`
