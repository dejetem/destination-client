import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import { useNavigate, useLocation } from 'react-router-dom';
import { MuiChipsInput } from 'mui-chips-input'
import useStyles from './HomeStyles';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();


  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit" elevation={6}>
              <TextField 
                onKeyDown={handleKeyPress} 
                name="search" 
                variant="outlined" 
                label="Search Destinations" 
                fullWidth 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                />
              <MuiChipsInput
                style={{ margin: '10px 0' }}
                value={tags}
                helperText={tags.length > 0 ? "Double click to edit a chip" : ""}
                onAddChip={handleAddChip}
                onDeleteChip={handleDeleteChip}
                label="Search Tags"
                variant="outlined"
               />
              <Button 
                onClick={searchPost} 
                className={classes.searchButton} 
                variant="contained" 
                color="primary">
                Search
              </Button>
          </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
           
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;