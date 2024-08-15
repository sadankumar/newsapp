import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
//import PropTYpes from 'react'

export default class News extends Component {
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null
    };
  }

  async componentDidMount() {
    try {
    
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=601684ff38c64138b1b935382b2059f7&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error: ", error);
      this.setState({ articles: [] });
    }
  }

  handleNextClick = async () => {
    try {
      console.log(this.props.category)
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=601684ff38c64138b1b935382b2059f7&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error: ", error);
      this.setState({ articles: [] });
    }
  };

  handlePreviousClick = async () => {
    try {
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=601684ff38c64138b1b935382b2059f7&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      let parseData = await data.json();

      this.setState({
        articles: parseData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error: ", error);
      this.setState({ articles: [] });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-3"> Newsmonkey- Top Heahlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &laquo; prev
          </button>
          <button
            type="button"
            className="btn btn-dark mx-1"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
