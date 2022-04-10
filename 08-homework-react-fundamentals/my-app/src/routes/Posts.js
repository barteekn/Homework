import { useState, useEffect } from 'react';
import { Link  } from "react-router-dom";
import Header from "../components/Header/Header";
import { Texts } from "../helper/Translations";
import Footer from '../components/Footer/Footer';
import { StyledList } from "../components/List/List.styled";

const Posts = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(response => setPosts(response));
    }, []);

    const renderPosts = () => posts.map(post => {
        const postUrl = `/posts/${post.id}`;

        return (
            <div key={post.id}>
                <Link to={postUrl} >
                    {post.title}
                </Link>
            </div>
        );
    });

    return (<div>
       <Header title={Texts.Title}/>
       <StyledList>
        <h2>Lista Postów:</h2>
        {renderPosts()}
        </StyledList>
        
        <Footer footer={Texts.Footer}/>
    </div>)
}

export default Posts;