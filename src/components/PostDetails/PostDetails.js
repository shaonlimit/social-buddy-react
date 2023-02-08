import { makeStyles } from '@material-ui/core';
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';


const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      padding: '10px 20px',
    },
    img:{
        width: '100%',
        height: '200px',
    }
  }));

const PostDetails = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [singlePost, setSinglePost] = useState([]);
    const [comment, setComment] = useState([]);
    const [user,setUser] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
        .then(response => response.json())
        .then(data=>setComment(data))
    },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response =>response.json())
        .then(data=>setSinglePost(data))
    },[])

 useEffect(()=>{
fetch(`https://random-data-api.com/api/v2/users?size=1&is_xml=true`)
   .then(response => response.json())
   .then(data=>setUser(data))
 },[])
   

const {title,body} = singlePost;
    return (
        <Container>
           <Grid container className={classes.root}>
                <div className="post-details-contaier"> 
                
                    <h4>{String(title).toUpperCase()}</h4>
                    <img src={`https://random.imagecdn.app/500/${postId}000`} alt="" className={classes.img}/>
                    <p>{body}</p>
                </div>
           </Grid>

           <Grid container>
                <div className="comment-container">
                    
                    <div className="img-container">
                            <img src={user.avatar} alt="" />
                    </div>
                    <div className="comment-details-container">
                        <h4>{comment.name}</h4>
                        <h5>{comment.email}</h5>
                        <p>{comment.body}</p>
                    </div>
                </div>
            </Grid>
        </Container>
      
    );
};

export default PostDetails;