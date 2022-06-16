var searchResults = $("#search-results");
var searchInput = $("#search-input");

var mqKey = "";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}&location=${mqLocation}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;


// Get the parameters past 
function getURLParams() {

}

