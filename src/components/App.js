import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  handleChange(event){
    event.preventDefault();
    //console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }

  handleKeyUp(event){
    if(event.key === 'Enter' && this.state.searchTerm !== ''){
      let searchUrl = "search/multi?query=" + this.state.searchTerm + "&apikey=" + 'af43b44e676c68ef2bc426078345b150';
      this.setState({searchUrl:searchUrl});
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          Netflix
          <div id="search" className="Search">
            <input 
              type="search" 
              placeholder="Search for a title..."
              onChange={this.handleChange}
              value={this.state.searchTerm}
              onKeyUp={this.handleKeyUp}
            /> 
          </div>
        </header>
      
      </div>
    );
  }
}
