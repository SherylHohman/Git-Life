/* This file now contains most of the code that was in app.jsx, */
/*   when our app had only this one (splash) page - and before we added routes.js */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from './searchbar';
import SearchResults from'../components/searchresults';
import * as Actions from '../actions';
import CommitItems from './../components/commitItems';
import SplashRepos from './container_splash_repos';
import RepoSearchResults from'../components/reposearchresults';
import CommitItems from '../components/commitItems';
import WiredResults from '../components/wiredResults';
import UserResults from './userResults';

/* if you want to Link to a different "page" use this format: */
/* <Link to "routePath">otherPage</Link> */
class SplashPage extends Component {
  componentWillMount(){}

  render(){
    return (
      <div className="splashPage">
          <h4> Splash Page </h4>
          <SearchBar searchTerm={this.props.term} onRequest={this.props.actions.searchGitHub} onSearchTermChange={this.props.actions.updateSearchTerm}/>
          <UserResults results={this.props.results} />
          <RepoSearchResults results={this.props.results}/>
          <WiredResults hnresults={this.props.hnResults} searchHN={this.props.actions.searchHN} searchData={this.props.actions.searchData} dataResults={this.props.dataResults} wired={this.props.actions.searchWired} wiredResults={this.props.wiredResults}/>
          <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    repos: state.splashRepos,
    commitData: state.commitData,
    wiredResults: state.wiredResults,
    dataResults: state.dataResults,
    hnResults: state.hnResults
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
