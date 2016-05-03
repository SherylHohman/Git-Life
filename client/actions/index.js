import Axios from 'axios';

export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export function updateSearchTerm(searchTerm = null){
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  }
}

export const REQUEST_GIT = 'REQUEST_GIT';
export function searchGitHub(searchTerm){
  var results = Axios.get('/search/repos', {
      params: {
        searchTerm: searchTerm
      }
  });
  return {
    type: REQUEST_GIT,
    payload: results
  }
}
export const GET_SPLASH_REPOS = 'GET_SPLASH_REPOS';
export function getSplashRepos(){
  var repos = Axios.get('/splash/repos',{});
  return{
    type: GET_SPLASH_REPOS,
    payload: repos
  }
}

export const COMMIT_DATA = 'COMMIT_DATA';
export function getCommitData(){
  // if want to update results after user enters a searchTerm
  // add searchTerm as a parameter
  // and add search term to params object

   var results = Axios.get('/splash/commitData', {
      params: {
      }
  });
  return {
    type: COMMIT_DATA,
    payload: commits
  }
}

export const REQUEST_WIRED = 'REQUEST_WIRED';
export function searchWired(){
  var wiredResults = Axios.get('/splash/rsswired', {
      params: {
      }
  });
  return {
    type: REQUEST_WIRED,
    payload: wiredResults
  }
}
export const REQUEST_DATAFEED = 'REQUEST_DATAFEED';
export function searchData(){
  var dataResults = Axios.get('/splash/rssdata', {
      params: {

      }
  });
  return {
    type: REQUEST_DATAFEED,
    payload: dataResults
  }

}
export const REQUEST_HN = 'REQUEST_HN';
export function searchHN(){
  var hnResults = Axios.get('/splash/rsshn', {
      params: {

      }
  });
  return {
    type: REQUEST_HN,
    payload: hnResults
  }

}

