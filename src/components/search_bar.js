import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //only ever modify state this way within constructor
    //anywhere else, use this.setState
    this.state = {term: ''};
  }

  render() {
    return (
        <div>
          <input
            value={this.state.term} //this is now a controlled component
            onChange={event => this.setState({ term: event.target.value })} />
        </div>
      );
  }
}

export default SearchBar;

//Class-based component vs functional component
//Class-based is when you need to maintain state
//Functional component is when only taking some input and returns JSX, can contain class-based component
//When converting from functional component to class based component it is important to update "props" to "this.props"

//controlled component
//when the component is rendered the first time, term is set to ''
//when user inputs something, onChange triggers setState; at this point the value of the input has not changed
//because the state is changed, the component is re-rendered, then finally the input value is set with the new term
