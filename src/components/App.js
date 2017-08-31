import React, { Component } from 'react';
import TitleList from './TitleList';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Hero from './Hero';
import Logo from './Logo';




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
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input 
              type="search" 
              placeholder="Search for a title..."
              onChange={this.handleChange}
              value={this.state.searchTerm}
              onKeyUp={this.handleKeyUp}
            /> 
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Sri" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      
      </div>
    );
  }
}
