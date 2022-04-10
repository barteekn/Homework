import { StyledHeader } from './Header.styled';
import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';

 const Header = ({title}) => {
    const [isRelative, setIsRelative] = useState(false);
    const scrollListener = () => {
      if (window.scrollY < 600) {
        setIsRelative(true);
      } else {
        setIsRelative(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', scrollListener);
  
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    }, []);
  
    return ( 
  
      <StyledHeader isRelative={isRelative}>
          <h1>
           {title}             
         </h1>  
         <Nav/>
    </StyledHeader>
  
    )
  };



  export default Header;