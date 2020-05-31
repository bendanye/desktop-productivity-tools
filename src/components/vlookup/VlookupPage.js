import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import './vlookup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { runVlookup } = require('./vlookup');

export default class VlookupPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataset: '',
      criteriaset: '',
      colSearchBy: '',
      colOutput: '',
      resultset: '',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleDataSetChange = this.handleDataSetChange.bind(this);
    this.handleCriteriaSetChange = this.handleCriteriaSetChange.bind(this);
    this.handleColSearchByChange = this.handleColSearchByChange.bind(this);
    this.handleColOutputChange = this.handleColOutputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleDataSetChange(event) {
    this.setState({dataset: event.target.value});
  }

  handleCriteriaSetChange(event) {
    this.setState({criteriaset: event.target.value});
  }

  handleColSearchByChange(event) {
    this.setState({colSearchBy: event.target.value});
  }

  handleColOutputChange(event) {
    this.setState({colOutput: event.target.value});
  }

  handleButtonClick() {
    const dataSetArr = this.state.dataset.trim();
    const criteriaSetArr = this.state.criteriaset.trim();
    const colSearchByArr = this.state.colSearchBy.trim().split("\n");
    const colOutputArr = this.state.colOutput.trim().split("\n");

    const outputResut = runVlookup({
      dataSet: dataSetArr, 
      criteriaSet: criteriaSetArr,
      colsSearchBy: colSearchByArr,
      colsOutput: colOutputArr
    });

    this.setState({resultset: outputResut});
  }

  render() {
    return (
      <div>
        <h1>Vlookup</h1>
        <header className="App-header">
          <p>
            Trying to replicate Excel vlookup without having enter those formula<br/>
            Note: Header must be specified, Column name must be matched

          </p>
        </header>
  
        <div className="container">
          <div id="st-box">
            <h3>Data Set 1</h3>
            <textarea
              className="form-control"
              value={this.state.dataset}
              onChange={this.handleDataSetChange}
              id="dataset1"
              rows="15"
              cols="25"
            />
          </div>
          <div id="nd-box">
            <h3>Criteria</h3>
            <textarea
              className="form-control"
              value={this.state.criteriaset}
              onChange={this.handleCriteriaSetChange}
              id="dataset2"
              rows="15"
              cols="25"
            />
          </div>

          <div id="nd-box">
            <h3>Search By</h3>
            <textarea
              className="form-control"
              value={this.state.colSearchBy}
              onChange={this.handleColSearchByChange}
              rows="2"
              cols="5"
            />
            <br/>
            <h3>Output Col</h3>
            <textarea
              className="form-control"
              value={this.state.colOutput}
              onChange={this.handleColOutputChange}
              rows="2"
              cols="5"
            />
            <br/>
            <Button onClick={this.handleButtonClick} variant="primary">Process</Button>
          </div>
  
          <div id="ld-box">
            <h3>Result</h3>
            <textarea
              className="form-control"
              disabled
              value={this.state.resultset}
              id="resultset"
              rows="15"
              cols="25"
            />
          </div>
          
        </div>
      </div>
    );
  }
}
