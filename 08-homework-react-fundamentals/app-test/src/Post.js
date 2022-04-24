import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DATA from "./components/helper/helperData";
// import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css'
import styled from "styled-components";
import CommentForm from "./components/CommentForm/CommentForm";


const ListStyled = styled.ul`
background-color: aliceblue;
margin: 40px 150px;
box-shadow: 2px 1px 8px 5px rgba(66, 68, 90, 1);
padding: 40px;
text-align: center;
letter-spacing: 2px;
font-family: 'Roboto', sans-serif;

li {
  list-style-type: none;
}

a { text-decoration: none;
text-transform: uppercase;

}

&:hover {
    box-shadow: 2px 1px 40px 5px rgba(66, 68, 90, 1);
    border-radius: 2px;
    transition: all 0.5s ease-out;
}


`

function Post() {
  const [postDetails, setPostDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(response => setPostDetails(response));
  }, [id])


  return (
    <>
      <Nav />
      <ListStyled>
        <li>
          <h3>{postDetails.title}</h3>
          <p>{postDetails.body}</p>
        </li>
      </ListStyled>
      <CommentForm />

      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default Post;
