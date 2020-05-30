import React from 'react';
import { Button } from 'react-bootstrap'

import './transpose.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransposePage() {
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
            id="exampleFormControlTextarea1"
            rows="15"
          />
        </div>
        <div id="nd-box">
          <h3>Data Set 2</h3>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="15"
          />
        </div>

        <div id="ld-box">
          <div></div>
          <Button variant="primary">Process</Button>
        </div>

        <div id="ld-box">
          <h3>Result</h3>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="15"
          />
        </div>
        
      </div>

      
      

    </div>
  );
}

export default TransposePage;
