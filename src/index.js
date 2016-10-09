import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBPZR4V1sTuUZSZQYaMTFW1-wn7ITdDldY';

// Create a new component, and this component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'cusco' }, videos => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and insert it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

//Downwards data flow = only the most parent component is responsible for fetching data
