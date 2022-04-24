import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DATA from "./components/helper/helperData";
import './App.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";

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


function Blog() {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => setPost(response));
  }, []);


  const renderPost = () => posts.map(post => {
    const postUrl = `/post/${post.id}`;

    return (
      <ListStyled>
        <li><Link to={postUrl} key={post.id}>
          {post.title}
        </Link></li>
      </ListStyled>);
  });

  return (
    <>
      <Nav />
      {renderPost()}
      <Footer text1={DATA.FOOTER.TEXT1} text2={DATA.FOOTER.TEXT2} />
    </>
  );
}

export default Blog;
