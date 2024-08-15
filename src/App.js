import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export default class Mynewapp extends Component {
  static defaultProps = {
    pageSize: 5,  
    category: 'general',
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={this.props.pageSize} category={this.props.category} />} />
            <Route path="/business" element={<News pageSize={this.props.pageSize} category={"business"} />} />
            <Route path="/entertainment" element={<News pageSize={this.props.pageSize} category={"entertainment"} />} />
            <Route path="/general" element={<News pageSize={this.props.pageSize} category={"general"} />} />
            <Route path="/health" element={<News pageSize={this.props.pageSize} category={"health"} />} />
            <Route path="/science" element={<News pageSize={this.props.pageSize} category={"science"} />} />
            <Route path="/sports" element={<News pageSize={this.props.pageSize} category={"sports"} />} />
            <Route path="/technology" element={<News pageSize={this.props.pageSize} category={"technology"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
