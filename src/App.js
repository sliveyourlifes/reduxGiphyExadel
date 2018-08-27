import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './features/HomePage/HomePage'
import RandomPage from './features/RandomPage/RandomPage'
import Header from './components/Header'
import Footer from './components/Footer'

const Main = ()=> {
  return(
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/random' component={RandomPage}/>
        </Switch>
      </main>
  )
}

const App = () => {
  return(
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
