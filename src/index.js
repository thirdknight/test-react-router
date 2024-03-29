import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';

//views
import Blog from './routes/Blog';
import Post from './routes/Post';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Error from './routes/Error'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<Post />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
