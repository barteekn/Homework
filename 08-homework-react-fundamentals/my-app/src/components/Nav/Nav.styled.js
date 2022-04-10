import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled(NavLink)`
background: #fff;
border-color: #003153;
border-style: solid;
padding: 10px;
color: #333333;
text-decoration: none;
margin: 10px;
&.active{
    color: red;
}
`