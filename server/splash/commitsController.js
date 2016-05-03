var request = require('request');
var fs = require('fs');

const SECRET = require('./tempsecret.js');
const GITHUB_ROOT = 'https://api.github.com/';

const SECRET_URL  = '&client_id=' + SECRET.id + '&client_secret=' + SECRET.secret;

module.exports = function(req, res){

    var oneDay = 86400000;
    var yesterday = Date.now() - oneDay;
    var yesterdayStr = yesterday.getFullYear + '-'+ yesterday.getDate + '-' + yesterday.getDay;

    var endpoint = 'search/issues?q=';
    var keyword = 'react in:body';
    var since = 'updated:<=' + yesterdayStr; //+ today.toISOString();
    var params = keyword + since;

      // use the public API for now instead
      // uri:     GITHUB_ROOT + endpoint + params, // + SECRET_URL,
    request(
      {
        uri:     GITHUB_ROOT + endpoint + params,
        method:  'GET',

        headers: {'user-agent': 'node.js'}
      },
      function (error, response, body) {
        if(error){
          console.log('error in server/splash/commitsController.js: ', error);
        }

        fs.writeFile(__dirname + '/../storage/commits.txt', JSON.stringify(body), (err) => {
          if(err){
            console.log('fs.writeFile error in server/splash/commitsController.js', err);
          }
        });

        res.send(JSON.parse(body).items);
      }
    );


      function saveResultsToFile(){
        fs.writeFile(__dirname + '/../storage/commits.txt', JSON.stringify(body), (err) => {
          if(err){
            console.log('fs.writeFile error in server/splash/commitsController.js', err);
          }
        });
      }

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
