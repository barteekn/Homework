
import { NavStyled } from "./Nav.styled";
const Nav = () => {
  return (
  
   <nav>
     <span>
        <NavStyled to="/">HOME</NavStyled>
        </span>
        <span>
        <NavStyled to="/About">ABOUT</NavStyled>
        </span>
        <span>
        <NavStyled to="/Contact">CONTACT</NavStyled>
        </span>
        <span>
        <NavStyled to="/Offer">OFFER</NavStyled>
        </span>
         <span>
        <NavStyled to="/posts">BLOG</NavStyled>
        </span>
    </nav>
    
  );
};
export default Nav;
