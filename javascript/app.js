var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "afab3232dfeb4a27acb3fd923223dda9",
    'q': "orlando",
    'sort': "newest"
});

$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(result);
}).fail(function(err) {
    throw err;
});