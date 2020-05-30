import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import './transpose.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TransposePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataset1: '',
      dataset2: '',
      dataset3: '',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleDataSet1Change = this.handleDataSet1Change.bind(this);
    this.handleDataSet2Change = this.handleDataSet2Change.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleDataSet1Change(event) {
    this.setState({dataset1: event.target.value.trim()});
  }

  handleDataSet2Change(event) {
    this.setState({dataset2: event.target.value.trim()});
  }

  handleButtonClick() {
    const dataset1Arr = this.state.dataset1.split("\n");
    const dataset2Arr = this.state.dataset2.split("\n");

    let outputResut = "";

    for(let value1 of dataset1Arr) {
      for(let value2 of dataset2Arr) {
        outputResut += value1 + ";" + value2 + "\n";
      }
    }

    this.setState({dataset3: outputResut});
  }

  render() {
    return (
      <div>
        <h1>Transpose</h1>
        <header className="App-header">
          <p>
            Welcome to Transpose (sorry lack of better words) Utility!
          </p>
        </header>
  
        <div className="container">
          <div id="st-box">
            <h3>Data Set 1</h3>
            <textarea
              className="form-control"
              value={this.state.dataset1}
              onChange={this.handleDataSet1Change}
              id="dataset1"
              rows="15"
            />
          </div>
          <div id="nd-box">
            <h3>Data Set 2</h3>
            <textarea
              className="form-control"
              value={this.state.dataset2}
              onChange={this.handleDataSet2Change}
              id="dataset2"
              rows="15"
            />
          </div>
  
          <div id="ld-box">
            <div></div>
            <Button onClick={this.handleButtonClick} variant="primary">Process</Button>
          </div>
  
          <div id="ld-box">
            <h3>Result</h3>
            <textarea
              className="form-control"
              disabled
              value={this.state.dataset3}
              id="dataset3"
              rows="15"
            />
          </div>
          
        </div>
      </div>
    );
  }
}
