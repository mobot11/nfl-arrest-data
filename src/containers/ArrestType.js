import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { getPopularArrestTypes } from '../utils/dataProcessing';
import ArrestBarChart from '../components/_BarChart';

class ArrestType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    fetch('http://NflArrest.com/api/v1/crime')
      .then(r => r.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(err => {
        console.error(err);
        this.setState({ data: err });
      });
  }
  render() {
    return  this.state.data ? <ArrestBarChart data={getPopularArrestTypes(this.state.data)} title="Most common infractions" /> : '';
  }
}

export default ArrestType;
