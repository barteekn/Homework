import styled from "styled-components";

const PeopleListStyled = styled.ul`
background-color: aliceblue;
margin: 40px 150px;
box-shadow: 2px 1px 8px 5px rgba(66, 68, 90, 1);
padding: 40px;
text-align: center;
letter-spacing: 2px;
font-family: 'Roboto', sans-serif;
h3 {
    text-align: center;
    text-transform: uppercase;
}

li {
    list-style-type: none;
};
&:hover {
    box-shadow: 2px 1px 40px 5px rgba(66, 68, 90, 1);
    border-radius: 2px;
    transition: all 0.5s ease-out;
}
`



export default PeopleListStyled;