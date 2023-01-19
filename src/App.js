import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

import useStyles from './AppStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate} from "react-router-dom";

const theme = createTheme();

function App() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl">
    <Navbar />
    <Routes>
      <Route path="/"  element={<Navigate to="/posts" />} />
      <Route path="/posts"  element={<Home/>} />
      <Route path="/posts/search" element={<Home/>} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path="/auth"  element={(!user ? <Auth /> : <Navigate to="/posts" />)} />
    </Routes>
    </Container>
    </ThemeProvider>
  );
}

export default App;
