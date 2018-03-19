import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    render() {
        return(
            <div>
              <input type="text" onChange={this.handleChange}/>
              Value of input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;