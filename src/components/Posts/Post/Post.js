import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Paper } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import defaultimag from '../../../images/defaultimag.png';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './PostStyles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(post?.likeCount);

  const userId = user?.result?.sub || user?.result?._id;
  const hasLikedPost = post?.likeCount?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikeCount(post?.likeCount?.filter((id) => id !== userId));
    } else {
      setLikeCount([...post?.likeCount, userId]);
    }
  };

  const Likes = () => {
    if (likeCount?.length > 0) {
      return likeCount?.find((like) => like === (user?.result?.sub || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likeCount?.length > 2 ? `You and ${likeCount?.length - 1} others` : `${likeCount.length} like${likeCount.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{likeCount?.length} {likeCount?.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like &nbsp;</>;
  };
  const openPost = (e) => {
    navigate(`/posts/${post._id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <Paper
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
        elevation={0}
      >
      <CardMedia className={classes.media} image={post.selectedFile || defaultimag} title={post.title} />
      </Paper>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
           <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <Paper
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
        elevation={0}
      >
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      </Paper>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> 
              Delete
          </Button>
        )}
      </CardActions>
    
    </Card>
  );
};

export default Post;