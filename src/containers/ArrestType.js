import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { getPopularArrestTypes } from '../utils/dataProcessing';
import ArrestTypeBarChart from '../components/ArrestTypeBarChart';

class ArrestType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    fetch('http://NflArrest.com/api/v1/crime')
    .then(r => r.json())
    .then(data => this.setState({data: data}))
    .catch(err => {
      console.error(err);
      this.setState({ data: err });
    });
  }
  render() {
    return (
      this.state.data ? <ArrestTypeBarChart data={getPopularArrestTypes(this.state.data)} /> : ''
    );
  }
}

export default ArrestType;