var searchResults = $("#search-results");
var searchInput = $("#search-input");

var mqKey = "d36a3PmpJeM5TrBfITgIT1DL7zO42cHl";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}&location=${mqLocation}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;

var count = 10;


// Get the parameters past 
function getBreweryInfo() {
    
    for (var i=0; i<count; i++){
        var brewContainer = $("<section>");
        brewContainer.attr("class", "container");
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

function getlatlon(){

}

getBreweryInfo();
            // <section class="container">
            //     <div class="bar-name">name</div>
            //     <div id="bar-address">address</div>
            //     <div id="bar-phone">phone</div>
            //     <div id="bar-website">website</div>
            // </section>