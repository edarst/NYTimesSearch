var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0a4f449688f04ed582e845210a0e6886"
});

$.ajax({

  url: url,
  method: 'GET',

}).done(function(result) {

  console.log(result);

}).fail(function(err) {

  throw err;
  
});