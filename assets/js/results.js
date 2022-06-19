var searchResults = $("#search-results");
var searchInput = $("#search-input");
var searchBtn = $("#search-btn");

var mqKey = "d36a3PmpJeM5TrBfITgIT1DL7zO42cHl";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;

var breweryData = [];


// Get the parameters past 
function getBreweryInfo() {
    
    for (var i=0; i<breweryData.length; i++){
        var brewContainer = $("<section>");
        brewContainer.attr("class", "container box");
        var brewName = $("<div>");
        brewName.attr("class", "bar-info");
        brewName.html(`<strong>Name:</strong> <br>${breweryData[i].name}`);
        brewContainer.append(brewName);

        var brewAddress = $("<div>");
        brewAddress.attr("class", "bar-info");
        brewAddress.html(`<strong>Address:</strong> <br>${breweryData[i].street} ${breweryData[i].city} ${breweryData[i].state}`);
        brewContainer.append(brewAddress);
        
        var brewPhone = $("<div>");
        brewPhone.attr("class", "bar-info");
        if (breweryData[i].phone != null) {
            brewPhone.html(`<strong>Phone:</strong><br>${breweryData[i].phone}`);
            brewContainer.append(brewPhone);
        }
        
        var brewURL = $("<div>");
        brewURL.attr("class", "bar-info");
        if (breweryData[i].website_url != null){
            brewURL.html(`<strong>Website:</strong> <br><a href=${breweryData[i].website_url}>Link</a>`);
            brewContainer.append(brewURL);
        }
        searchResults.append(brewContainer);
    }
}

function getlatlon(event){
    var btnId = event.target.id;
    if (btnId === "search-btn"){
        $('#search-results .container').remove();
        mqLocation = searchInput.val();
        fetch(`${mqBase}&location=${mqLocation}`)
        .then((response) => {
            return response.json();
        }).then ((data) => {
            var latLonData = data.results[0].locations[0].displayLatLng;
            obLat = latLonData.lat;
            obLon = latLonData.lng;
            // console.obBase
            fetch(`https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`)
            .then((response)=>{
                return response.json();
            }).then ((data)=>{
                console.log(data);
                breweryData = data;
                getBreweryInfo();
            });
        });


        
    }
   
}

searchBtn.on("click", getlatlon);
