var express = require ('express');
var app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

app.get('/', function (req, res) {
    res.render('home');    
});

app.get ('/searchresults', function (req, res) {
    
var location = req.query['location'];
    
var Yelp = require('yelp');
    
    
var yelp = new Yelp({
  consumer_key: 'UMPeHCPg0tQrGiGjaBSmYA',
  consumer_secret: 'H4nT2tQdKU9YWEX0y7JhVUHDVyA',
  token: 'BmyRG2ctINl0WauUS_Ti-lQTLeZeQPwn',
  token_secret: '_TChMZvE4J6KCMpFhPB5qbCrHm4',
    
});
 
// See http://www.yelp.com/developers/documentation/v2/search_api 
yelp.search({ term: 'food', location: location, limit: 10 })
.then(function (data) {

res.render ('searchresults', {
data: data
});
    
})
.catch(function (err) {
  console.error(err);
})
    
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    
});