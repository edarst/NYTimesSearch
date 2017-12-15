$(document).ready(function(){

	$('#searchbtn').on("click", function(e) {

		e.preventDefault();
		var userInput = $('#searchterm').val();
		var userFilter = $('#select').val();
		var startYear = $('#startyear').val();
		var endYear = $('#endyear').val();



	//contained within div class of .panel

	//number of records to fitler by (id #select)



	// end year optional (id of #endyear)

	// search input (ID #searcbtn)

	// clear input (ID #clearbtn)

	// var userSearch = 
	// var filter = 
	// var sYear =
	// var eYear =

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "0a4f449688f04ed582e845210a0e6886",
	  'q': userInput,
	  'sort': "newest",

	  // 'begin_date': startYear,
	  // 'end_date': endYear,

	});

	$.ajax({

	  url: url,
	  method: 'GET',

	}).done(function(result) {

	  console.log(result);

	  for (var i=0; i < userFilter; i++) {

	  	// result.response.docs[i];
	  	console.log(result.response.docs[i]);

	  	var recordTitle = $("<h3>");
  		var miniCounter = $('<p>');
  		miniCounter.html(i+1);
  		(recordTitle).html(result.response.docs[i].headline.main);

  		$("#resultsRenderingLocation").append(miniCounter);
  		$("#resultsRenderingLocation").append(recordTitle);


  		
	  }



	}).fail(function(err) {

	  throw err;

	});


	});
});