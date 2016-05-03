var request = require('request');
var fs = require('fs');

const SECRET = require('./tempsecret.js');
const GITHUB_ROOT = 'https://api.github.com/';

const SECRET_URL  = '&client_id=' + SECRET.id + '&client_secret=' + SECRET.secret;

module.exports = function(req, res){

  // Query API

    // var gitRequest = 'size:>1000&pushed=>2016-4-25&sort=stars&order=desc'
    // //var query = req.query.searchTerm;
    // var query = 'search/repositories?q=react-redux';

    // get latest issues
    // var date

    var endpoint = 'search/issues?q=';
    var params = 'react in:body updated:>=2013-02-01';

    request({

      // uri: "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}\",
      // uri: "https://api.github.com/search/repositories",//?q=updated:>=2016-04-28", //{&page,per_page,sort,order}\",
      // uri: 'https://github.com/search?l=javascript&q=stars>1&s=updated&type=Repositories',
      // https://github.com/search?utf8=%E2%9C%93&q=javascript+pushed%3A%3E2016-04-28&type=Repositories&ref=searchresults

      // use the public API for now instead
      // uri:  GITHUB_ROOT + gitRequest + query + SECRET_URL,
      uri:     GITHUB_ROOT + endpoint + params,
      method:  'GET',
      headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
          if(error){
            console.log('Error: ', error);
          }

          fs.writeFile(__dirname + '/../storage/commits.txt', JSON.stringify(body), (err) => {
            if(err){
              console.log('fs.writeFile error in server/splash/commitsController.js', err);
            }
          timeOfLastGitRequest = new Date();
        });
        res.send(JSON.parse(body).items);
      });
  }

  // Top 7 languages
  // total issues in each language added this week
  // then drill down: tags, by day of week, by word cloud on issue header
  //  or number or number of comments. or open vs closed vs fixed

/*
How many issues do Ruby developers create each day?

Track issue trends over time.

for i in {1..7}
do
    created_on=`date -v-"${i}"d '+%Y-%m-%d'`
    issue_count=$(                                                      \
        curl -G https://api.github.com/search/issues                    \
        --data-urlencode "q=language:ruby created:$created_on"          \
        -H "Authorization: token REDACTED"                              \
        -H "Accept: application/vnd.github.preview" | jq ".total_count" \
    )

    echo "$created_on: $issue_count"
done
2013-07-22: 1174
2013-07-21: 716
2013-07-20: 687
2013-07-19: 1336
2013-07-18: 1348
2013-07-17: 1471
2013-07-16: 1386
*/


/*
  Find the hottest repositories created in the last week

Keep an eye on the latest trending repos.

# We'll use the `date` command to get the date for "7 days ago"
$ date -v-7d '+%Y-%m-%d'
# => 2013-07-15

$ curl -G https://api.github.com/search/repositories       \
    --data-urlencode "q=created:>`date -v-7d '+%Y-%m-%d'`" \
    --data-urlencode "sort=stars"                          \
    --data-urlencode "order=desc"                          \
    -H "Accept: application/vnd.github.preview"            \
    | jq ".items[0,1,2] | {name, description, language, watchers_count, html_url}"
*/
