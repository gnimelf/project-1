var favoriteBtnEl = $(".fav-btn");
var searchResults = $("#search-results");
var searchInput = $("#search-input");
var searchBtn = $("#search-btn");

var mqKey = "d36a3PmpJeM5TrBfITgIT1DL7zO42cHl";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;

var favoritesAsString = localStorage.getItem['brewFavorites'];
var favoritesAsJSON = [];

// var breweryData = [];

var breweryData = [
    {
        "id": "islamorada-beer-company-islamorada",
        "name": "Islamorada Beer Company",
        "brewery_type": "micro",
        "street": "82229 Overseas Hwy",
        "address_2": null,
        "address_3": null,
        "city": "Islamorada",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33036-3659",
        "country": "United States",
        "longitude": "-80.5805987",
        "latitude": "24.9552722",
        "phone": "3055089093",
        "website_url": "http://www.islamoradabeerco.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "bone-island-brewing-key-west",
        "name": "Bone Island Brewing",
        "brewery_type": "micro",
        "street": "1111 Eaton St",
        "address_2": null,
        "address_3": null,
        "city": "Key West",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33040-6926",
        "country": "United States",
        "longitude": "-81.79651464",
        "latitude": "24.56141707",
        "phone": "3053043472",
        "website_url": "http://www.boneislandbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "first-flight-island-restaurant-and-brewery-key-west",
        "name": "First Flight Island Restaurant & Brewery",
        "brewery_type": "brewpub",
        "street": "301 Whitehead St",
        "address_2": null,
        "address_3": null,
        "city": "Key West",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33040-6542",
        "country": "United States",
        "longitude": "-81.805413",
        "latitude": "24.557321",
        "phone": null,
        "website_url": "http://firstflightkw.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "waterfront-brewery-llc-key-west",
        "name": "Waterfront Brewery LLC",
        "brewery_type": "brewpub",
        "street": "201 William St",
        "address_2": null,
        "address_3": null,
        "city": "Key West",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33040-6679",
        "country": "United States",
        "longitude": "-81.801344",
        "latitude": "24.561016",
        "phone": "3054402270",
        "website_url": "http://www.thewaterfrontbrewery.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "abbey-brewing-co-miami-beach",
        "name": "Abbey Brewing Co",
        "brewery_type": "contract",
        "street": "1115 16th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami Beach",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33139-2441",
        "country": "United States",
        "longitude": "-80.1402943",
        "latitude": "25.7890381",
        "phone": "3055388110",
        "website_url": null,
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "titanic-brewing-co-miami",
        "name": "Titanic Brewing Co",
        "brewery_type": "brewpub",
        "street": "5813 Ponce de Leon Blvd",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33146-2422",
        "country": "United States",
        "longitude": "-80.271314",
        "latitude": "25.719812",
        "phone": "3056672537",
        "website_url": "http://www.titanicbrewery.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "nightlife-brewing-co-miami",
        "name": "NightLife Brewing Co",
        "brewery_type": "micro",
        "street": "1588 Nw 7th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33125",
        "country": "United States",
        "longitude": "-80.22131343",
        "latitude": "25.7800687",
        "phone": "7867872337",
        "website_url": "http://www.nightlifebrewingco.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "lincolns-beard-brewing-co-miami",
        "name": "Lincoln's Beard Brewing Co.",
        "brewery_type": "micro",
        "street": "7360 SW 41st St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33155-4504",
        "country": "United States",
        "longitude": "-80.3143531",
        "latitude": "25.732096",
        "phone": "3059127390",
        "website_url": "http://lincolnsbeardbrewing.com/",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "j-wakefield-brewing-miami",
        "name": "J Wakefield Brewing",
        "brewery_type": "micro",
        "street": "120 NW 24th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33127-4414",
        "country": "United States",
        "longitude": "-80.19752867",
        "latitude": "25.7995437",
        "phone": "7862547779",
        "website_url": "http://www.jwakefieldbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "veza-sur-brewing-co-miami",
        "name": "Veza Sur Brewing Co",
        "brewery_type": "large",
        "street": "55 NW 25th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33127-4415",
        "country": "United States",
        "longitude": "-80.19614871",
        "latitude": "25.80089733",
        "phone": null,
        "website_url": null,
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "concrete-beach-brewery-miami",
        "name": "Concrete Beach Brewery",
        "brewery_type": "micro",
        "street": "325 NW 24th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33127-4325",
        "country": "United States",
        "longitude": "-80.20091709",
        "latitude": "25.800254",
        "phone": "3057962727",
        "website_url": "http://www.concretebeachbrewery.com/",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "wynwood-brewing-company-miami",
        "name": "Wynwood Brewing Company",
        "brewery_type": "micro",
        "street": "565 NW 24th St",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33127-4327",
        "country": "United States",
        "longitude": "-80.2044925",
        "latitude": "25.8003759",
        "phone": "3056405043",
        "website_url": "http://www.wynwoodbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "bousa-brewing-company-miami",
        "name": "Bousa Brewing Company",
        "brewery_type": "micro",
        "street": "7235 NE 4th Ave",
        "address_2": null,
        "address_3": null,
        "city": "Miami",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33138-5315",
        "country": "United States",
        "longitude": "-80.18941017",
        "latitude": "25.8414587",
        "phone": "3053635166",
        "website_url": "http://www.bousabrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "legacy-caribbean-craft-brewery-opa-locka",
        "name": "Legacy Caribbean Craft Brewery",
        "brewery_type": "micro",
        "street": "13416 NW 38th Ct",
        "address_2": null,
        "address_3": null,
        "city": "Opa Locka",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33054-4506",
        "country": "United States",
        "longitude": "-80.2626834",
        "latitude": "25.8950665",
        "phone": "7866816572",
        "website_url": "http://Www.legacyccb.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "department-coffee-hollywood",
        "name": "Department Coffee",
        "brewery_type": "contract",
        "street": "1940 N 30th Rd",
        "address_2": null,
        "address_3": null,
        "city": "Hollywood",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33021-4401",
        "country": "United States",
        "longitude": "-80.16836199",
        "latitude": "26.02618324",
        "phone": "3235382955",
        "website_url": "http://www.depatmentcoffee.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "3-sons-brewing-co-dania",
        "name": "3 Sons Brewing Co.",
        "brewery_type": "proprietor",
        "street": "236 N Federal Hwy",
        "address_2": null,
        "address_3": null,
        "city": "Dania",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33004-2870",
        "country": "United States",
        "longitude": "-80.14361029",
        "latitude": "26.04800238",
        "phone": "9546013833",
        "website_url": "http://www.3sonsbrewingco.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "hollywood-brewing-co-hollywood-1",
        "name": "Hollywood Brewing Co",
        "brewery_type": "micro",
        "street": "3410 N 29th Ave",
        "address_2": null,
        "address_3": null,
        "city": "Hollywood",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33020-1002",
        "country": "United States",
        "longitude": "-80.1658845",
        "latitude": "26.0405657",
        "phone": "3054144757",
        "website_url": "http://www.hollywood.beer",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "tarpon-river-brewing-fort-lauderdale",
        "name": "Tarpon River Brewing",
        "brewery_type": "micro",
        "street": "280 SW 6th Street",
        "address_2": null,
        "address_3": null,
        "city": "Fort Lauderdale",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33301",
        "country": "United States",
        "longitude": "-80.14595562",
        "latitude": "26.11462092",
        "phone": "9545334590",
        "website_url": "http://www.nativebrewingco.com/index.html",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "invasive-species-brewing-fort-lauderdale",
        "name": "Invasive Species Brewing",
        "brewery_type": "micro",
        "street": "726 NE 2nd Ave",
        "address_2": null,
        "address_3": null,
        "city": "Fort Lauderdale",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33304-2616",
        "country": "United States",
        "longitude": "-80.1418016",
        "latitude": "26.1298369",
        "phone": "7546662687",
        "website_url": "http://www.invasivespeciesbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "26-degree-brewing-company-pompano-beach",
        "name": "26 Degree Brewing Company",
        "brewery_type": "micro",
        "street": "2600 E Atlantic Blvd",
        "address_2": null,
        "address_3": null,
        "city": "Pompano Beach",
        "state": "Florida",
        "county_province": null,
        "postal_code": "33062-4940",
        "country": "United States",
        "longitude": "-80.1224169",
        "latitude": "26.2316338",
        "phone": "9545326964",
        "website_url": null,
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    }
];

function retrieveParams(){
    var params = document.location.search.split('=');
    console.log(params);
    mqLocation = params[1];
    // getlatlon();
    getBreweryInfo(breweryData);
}

function getInputValue(event){
    var btnId = event.target.id;
    if (btnId === "search-btn" || mqLocation != ""){
        mqLocation = searchInput.val();
        // getlatlon();
    }
}

function markFavorite(event){
    var tar_id = event.target.id;
    if(event.target.textContent == "☆") {
        $(`#${tar_id }`).html("&starf;");
        addToFavorites(event);
        // console.log(event);
    } else {
        $(`#${tar_id}`).html("&star;");
        addToFavorites(event);
    }
}

// Get the parameters past 
function getBreweryInfo(data) {
    
    for (var i=0; i<data.length; i++){
        var brewContainer = $("<section>");
        brewContainer.attr("class", "container box");

        var favBtn = $("<button>");
        favBtn.html("&star;");
        favBtn.attr("class", "fav-btn");
        favBtn.attr("id", `btn-${i}`)
        brewContainer.append(favBtn);

        var brewName = $("<div>");
        brewName.attr("class", "bar-info");
        brewName.html(`<strong>Name:</strong> <br>${breweryData[i].name}`);       
        brewContainer.append(brewName);

        var brewAddress = $("<div>");
        brewAddress.attr("class", "bar-info");
        if (breweryData[i].street != null){
            brewAddress.html(`<strong>Address:</strong> <br>${breweryData[i].street} ${breweryData[i].city} ${breweryData[i].state}`);
            brewContainer.append(brewAddress);
        } else {
            brewAddress.html(`<br>`);
            brewContainer.append(brewAddress);
        }
        
        var brewPhone = $("<div>");
        brewPhone.attr("class", "bar-info");
        if (breweryData[i].phone != null) {
            brewPhone.html(`<strong>Phone:</strong><br>${breweryData[i].phone}`);
            brewContainer.append(brewPhone);
        } else {
            brewPhone.html(`<strong>Phone:</strong><br>N/A`);
            brewContainer.append(brewPhone);
        }
        
        var brewURL = $("<div>");
        brewURL.attr("class", "bar-info");
        if (breweryData[i].website_url != null){
            brewURL.html(`<strong>Website:</strong> <br><a href=${breweryData[i].website_url}>Link</a>`);
            brewContainer.append(brewURL);
        } else {
            brewURL.html(`<strong>Website:</strong><br>N/A`);
            brewContainer.append(brewURL);
        }
        
        searchResults.append(brewContainer);
    }
}


function getlatlon(){
    $('#search-results .container').remove();
    fetch(`${mqBase}&location=${mqLocation}`)
    .then((response) => {
        return response.json();
    }).then ((data) => {
        var latLonData = data.results[0].locations[0].displayLatLng;
        obLat = latLonData.lat;
        obLon = latLonData.lng;
       
        fetch(`https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`)
        .then((response)=>{
            return response.json();
        }).then ((data)=>{
            breweryData = data;
            getBreweryInfo(breweryData);
        });
    });
}

// Add to favorites
function addToFavorites(event){
    var cardBreweryName =event.target.parentElement.childNodes[1].textContent
    var cardIdNum = event.target.id.split("-")[1];
    var foundName = false;
    
    for (var i=0; i<favoritesAsJSON.length; i++){
        if (`Name: ${favoritesAsJSON[i].name}` == cardBreweryName){
            foundName = true
            if (favoritesAsJSON.length==1){
                favoritesAsJSON = [];
            }else {
               favoritesAsJSON.splice([i], 1); 
            }
        }
    }
    if (!foundName){
        favoritesAsJSON.push(breweryData[cardIdNum]);
    }
    // saveFavoriteData();
}

// Grab localstorage data
function parseFavorites(){
    favoritesAsJSON = JSON.parse(favoritesAsString);
    console.log(favoritesAsJSON);
}

retrieveParams();
$(".fav-btn").ready(function(){
    favoriteBtnEl = $(".fav-btn");
    console.log(favoriteBtnEl);
    favoriteBtnEl.on("click", markFavorite);
})
searchBtn.on("click", getInputValue);