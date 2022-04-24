import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Paragraph from "./components/Paragraph/Paragraph";
import DATA from "./components/helper/helperData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
text-decoration:none;
display: block;
text-align:center;

button {
  background-color: black;
  box-shadow: inset 1px 1px 50px 4px rgba(7, 191, 228, 1);
  color: white;
  cursor: pointer;
  border: none;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}
`;

function Offer() {
  return (
    <>
      <Nav />
      <Paragraph paragraph={DATA.PARAGRAPH.OFFER} />
      <StyledLink to="/offer/list"> <button>➡ Click here to see the list of people who recommend us ⬅</button></StyledLink>
      <Paragraph paragraph={DATA.PARAGRAPH.OFFER} />
      <StyledLink to="/offer/list"> <button>➡ Click here to see the list of people who recommend us ⬅</button></StyledLink>
      <Paragraph paragraph={DATA.PARAGRAPH.OFFER} />
      <StyledLink to="/offer/list"> <button>➡ Click here to see the list of people who recommend us ⬅</button></StyledLink>
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default Offer;
