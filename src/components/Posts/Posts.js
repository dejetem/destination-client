import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './PostsStyles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles()
  if (!posts?.length && !isLoading) return 'No Destination Posts';
  return (
    isLoading ?
    <Grid container justifyContent="center" >
    <CircularProgress color="error"/>
    </Grid>
        : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={4} lg={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;