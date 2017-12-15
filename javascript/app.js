$('#searcbtn').on("click", function() {

	var userInput = $('#searchterm').val();
	var userFilter = $('#select').val();
	var startYear = $('#startyear').val();
	var endYear = $('#endyear').val();


	
//contained within div class of .panel

// gather user input from provided search fields

// search term query (from #searchterm)

//number of records to fitler by (id #select)

// start year optional (id of #startyear)

// end year optional (id of #endyear)

// search input (ID #searcbtn)

// clear input (ID #clearbtn)

var userSearch = 
var filter = 
var sYear =
var eYear =

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


});
// 