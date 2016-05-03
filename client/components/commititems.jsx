import React, {Component} from 'react';
import CommitItem from './commitItem';

export default class CommitItems extends Component {
  componentWillMount(){
      this.props.getCommitData();
  }

  showCommitData(){
    // this makes data available to the CommitItem Component
    return _.reduce(this.props.commitData, (accum, item)=>{
      var tagsThisItem = '';
      for(var i = 0; i < item.labels.length; i++) {
        tagsThisItem += ' ' + item.labels[i].name;
      }

      let html = (
        <CommitItem commitTime={item.updated_at} repo_url={item.html_url} tags={tagsThisItem} key={item.id}/>
      );

      accum.push(html);
      return accum;

    }, []);
  }

  render() {
    return (
      <div>
        Commit Data:
        {this.showCommitData()}
      </div>
    );
  }

};
