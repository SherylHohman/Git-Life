/* This file now contains most of the code that was in app.jsx, */
/*   when our app had only this one (splash) page - and before we added routes.js */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import CommitItems from './../components/commitItems';
import SplashRepos from './container_splash_repos';
import RepoSearchResults from'../components/reposearchresults';
import CommitItems from '../components/commitItems';
import WiredResults from '../components/wiredResults';

class Splash extends Component {
  render(){
    return (
      <div className="splashPage">
      <h2>Splash Page</h2>
        <div>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
          <SearchResults results={this.props.results}/>
        </div>
        <div className="commits">
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    commitData: state.commitData
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
