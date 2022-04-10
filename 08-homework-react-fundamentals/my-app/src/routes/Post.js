import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header/Header";
import { Texts } from "../helper/Translations";
import Footer from '../components/Footer/Footer';
import { StyledList } from "../components/List/List.styled";
import AddPost from './AddPost';
const Post = () => {
    const [postDetails, setPostDetails] = useState({});
    const { id } = useParams();


    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json())
                .then(response => setPostDetails(response));
    }, [])

    
    return (<div>
        <Header title={Texts.Title}/>
         <StyledList>
        <h1>Szczegóły danego postu:</h1>
        <h2>{postDetails.title}</h2>
        <p>{postDetails.body}</p>
        <AddPost/>
        </StyledList>
        <Footer footer={Texts.Footer}/>
    </div>);
}

export default Post;