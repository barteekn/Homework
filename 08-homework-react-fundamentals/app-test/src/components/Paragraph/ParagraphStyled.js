import styled from 'styled-components';

const ParagraphStyled = styled.p`
background-color: aliceblue;
margin: 40px 150px;
box-shadow: 2px 1px 8px 5px rgba(66, 68, 90, 1);
padding: 40px;
letter-spacing: 2px;
font-family: 'Roboto', sans-serif;
&:hover {
    box-shadow: 2px 1px 40px 5px rgba(66, 68, 90, 1);
    border-radius: 2px;
    transition: all 0.5s ease-out;
}

`

export default ParagraphStyled;