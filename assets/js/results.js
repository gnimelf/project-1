var searchResults = $("#search-results");
var searchInput = $("#search-input");
var searchBtn = $("#search-btn");

var mqKey = "d36a3PmpJeM5TrBfITgIT1DL7zO42cHl";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;

var count = 10;


// Get the parameters past 
function getBreweryInfo() {
    
    for (var i=0; i<count; i++){
        var brewContainer = $("<section>");
        brewContainer.attr("class", "container box");
        var brewName = $("<div>");
        brewName.attr("class", "bar-info");
        brewContainer.append(brewName);
        var brewAddress = $("<div>");
        brewAddress.attr("class", "bar-info");
        brewContainer.append(brewAddress);
        var brewPhone = $("<div>");
        brewPhone.attr("class", "bar-info");
        brewContainer.append(brewPhone);
        var brewURL = $("<div>");
        brewURL.attr("class", "bar-info");
        brewContainer.append(brewURL);
        searchResults.append(brewContainer);
    }
}

function getlatlon(event){
    var btnId = event.target.id;
    if (btnId === "search-btn"){
        mqLocation = searchInput.val();
        obLat = 40.520546
        obLon = -81.474087
        // fetch(`${mqBase}&location=${mqLocation}`)
        // .then((response) => {
        //     return response.json();
        // }).then ((data) => {
        //     var latLonData = data.results[0].locations[0].displayLatLng;
        //     obLat = latLonData.lat;
        //     obLon = latLonData.lng;
        //     console.obBase
        // });
        console.log(`https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`);
    }
    getBreweryInfo();
}

searchBtn.on("click", getlatlon);
