import { useState, useEffect } from 'react';


function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleTitle = (e) => setTitle(e.target.value); 
  const handleBody = (e) => setBody(e.target.value); 

  const handleSubmit = (e) => {
      e.preventDefault();

      fetch('https://jsonplaceholder.typicode.com/posts/', {
          method: 'post',
          header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
              title,
              body,
          }
      }).then(res => {
          setTitle('');
          setBody('');
      });
  }

  return (
    <div>
      <h2>Dodaj Komentarz</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" value={title} placeholder="Użytkownik" onChange={handleTitle} />
          <input type="text" value={body} placeholder="Komentarz" onChange={handleBody}/>
          <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default AddPost;