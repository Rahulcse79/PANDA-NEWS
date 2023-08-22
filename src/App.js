import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><NewsCard key="general" pagesize={this.pageSize} country={"in"} category="general"/></Route>
        <Route exact path="/business"><NewsCard key="business"pagesize={this.pageSize} country={"in"} category="business"/></Route>
        <Route exact path="/entertainment"><NewsCard key="entertainment"pagesize={this.pageSize} country={"in"} category="entertainment"/></Route>
        <Route exact path="/general"><NewsCard key="general"pagesize={this.pageSize} country={"in"} category="general"/></Route>
        <Route exact path="/health"><NewsCard key="health"pagesize={this.pageSize} country={"in"} category="health"/></Route>
        <Route exact path="/science"><NewsCard key="science"pagesize={this.pageSize} country={"in"} category="science"/></Route>
        <Route exact path="/sports"><NewsCard key="sports"pagesize={this.pageSize} country={"in"} category="sports"/></Route>
        <Route exact path="/technology"><NewsCard key="technology"pagesize={this.pageSize} country={"in"} category="technology"/></Route>
        </Switch>
      </Router>
    )
  }
}

      