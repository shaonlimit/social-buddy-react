import { makeStyles } from "@material-ui/core";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

const useStyles = makeStyles({
    root: {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
  });



function Post(props) {
  const { title, body,id } = props.post;
  const classes = useStyles();
  

  return (
    <Grid item xs={6} md={4} lg={3} >
  
    <Card style={{ height: '250px',padding: '10px'}} className='card'>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.root}>
          {body}
        </Typography>
       
      </CardContent>
     
      
      <Link style={{textDecoration:'none', color:'white'}} to={`/post/${id}`}>
      <Button fullWidth variant="contained" color="primary" size="small">
       See More
       
      </Button>
      </Link>
      
    </Card>
    
  </Grid>
    
  );
}

export default Post;
