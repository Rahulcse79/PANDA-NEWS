import React, { Component } from 'react'
import Card from './Card'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export class NewsCard extends Component {

  static defaultProps={
    country: 'in',
    pageSize: 8
  }

  static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number
  }

  constructor(props)
  {
    super(props);
    this.state={
      articles: [],
      loading: false,
      Page: 1
    }
    document.title = "PANDA NEWS - "+`${this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1)}`;
  }

  async allFun(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9159e76a32f946c387c423f203cf0f2f&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false});
  }

  async componentDidMount()
  {
    this.allFun();
  }

  PrevFun= async ()=>{
    this.setState({Page: this.state.Page-1});
    this.allFun();
  }

  NextFun=async()=>{
    this.setState({Page: this.state.Page+1});
    this.allFun();
  }
  

  render() {
    return (
      <div>
        <div className="container my-5 text-center">
      <h1>PANDA NEWS - TOP {this.props.category.toUpperCase()} HEADLINES</h1>
      </div>
        <div className="container">
          <div className="container my-3 mx-3 text-center">
          {this.state.loading && <Spiner/>}
          </div>
            <div className="row">
                { !this.state.loading && this.state.articles.map((element)=>{
                 return  <div className="col-md-4" key={element.url}>
                  <Card title={element.title} Description={element.description} imageurl={element.urlToImage} ReadMore={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>

                })}
                
            </div>
        </div>
      <div className="container my-3 d-flex justify-content-between">
      <button type="button" disabled={this.state.Page<=1} className="btn btn-primary" onClick={this.PrevFun}>&larr; Prev</button>
      <button type="button" disabled={this.state.Page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-primary" onClick={this.NextFun}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default NewsCard
