// Initialize Parse app

Parse.initialize("EJ7KmHDEAK3afHylfXghTEZKbrKWjOG9UzVM9gKb", "iqNA5WzmFQd558BBEJTQLh1EGGpKOOp7CWkGWA8T");

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');


// // Create a new instance of your Music class 
// var tune = new Music;

// // Set a property 'band' equal to a band name
// tune.set('band', 'T;

// // Set a property 'website' equal to the band's website
// tune.set('website', $('website'));
    
// // Set a property 'song' equal to a song
// tune.set('song', $('bestSong'));

// // Save your instance of your song -- and go see it on parse.com!
// tune.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var inst = new Music;

	// For each input element, set a property of your new instance equal to the input's value
	inst.set('bandNmae', $('#bandName').value);
	inst.set('website', $('#website').value);
	inst.set('bestSong', $('#bestSong').value);
	
	
	
	// After setting each property, save your new instance back to your database
	inst.save();

	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


