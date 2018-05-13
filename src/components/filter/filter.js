import React, { Component } from 'react';


class Filter extends Component {
  
    render() {
        return (
            <div class="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-primary btn-rounded">Today</button>
            <button type="button" className="btn btn-primary btn-default">Week</button>
            <button type="button" className="btn btn-primary btn-rounded">Month</button>
          </div>
        );
    }
}

export default Filter;