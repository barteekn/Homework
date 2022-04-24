import { FooterStyled } from "./FooterStyled";

const currentDate = new Date().getFullYear();
const Footer = ({ text1, text2 }) => {

    return (
        <FooterStyled>
            <div>
                {text1} - {currentDate}
            </div>
            <div>
                {text2}
            </div>

        </FooterStyled>)
};



export default Footer;