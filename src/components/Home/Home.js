import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(data=>setPost(data))
    })
    return (
        <Container>
             <Grid container rowSpacing={3} columnSpacing={3}> 
            {
                post.map(post=><Post post={post}></Post>)
            }
            </Grid>
        </Container>
           
          
        
    );
};

export default Home;