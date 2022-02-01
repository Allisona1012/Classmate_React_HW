
import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import ClassList from './componants/ClassList';
import Navbar from './componants/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Routes>
      <Route path="/" element={ClassList}/>

      </Routes>
      </>
    );
  }
}
