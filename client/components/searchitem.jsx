import React, {Component} from 'react';

export default class SearchItem extends Component{
  render(){
    return (
      <div>
        <a href={this.props.repo_url}>{this.props.description}</a>
      </div>
    );
  }
}
