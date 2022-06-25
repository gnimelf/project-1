var favBtnEl = $(".fav-btn");
var favoriteBtnEl = $("#favorite-btn");
var searchResults = $("#search-results");
var searchInput = $("#search-input");
var searchBtn = $("#search-btn");

var mqKey = "CSvJmkodbs7ZJkzAmlLZhflio90I2Y9n";
var mqLocation = "";
var mqBase = `http://www.mapquestapi.com/geocoding/v1/address?key=${mqKey}`;

var obLat = '';
var obLon = '';
var obBase = `https://api.openbrewerydb.org/breweries?by_dist=${obLat},${obLon}`;

var favoritesAsString = localStorage.getItem('brewFavorites');
var favoritesAsJSON = [];

var breweryData = [];

// get data from prev page
function retrieveParams(){
    var params = document.location.search.split('=');
    console.log(params);
    mqLocation = params[1];
    getlatlon();

}

// get user in put
function getInputValue(event){
    var btnId = event.target.id;
    if (btnId === "search-btn" || mqLocation != ""){
        mqLocation = searchInput.val();
        getlatlon();
    }
}

// add to favorites
function markFavorite(event){
    var tar_id = event.target.id;
    if(event.target.textContent == "☆") {
        $(`#${tar_id }`).html("&starf;");
        addToFavorites(event);
        console.log(event);
    } else {
        $(`#${tar_id}`).html("&star;");
        addToFavorites(event);
    }
}
// retrieve favorite data
function getFavoriteData(){
    searchResults.html('');
    getBreweryInfo(favoritesAsJSON);
}

// Get the parameters past 
function getBreweryInfo(data) {
    
    for (var i=0; i<data.length; i++){
        var brewContainer = $("<section>");
        brewContainer.attr("class", "container box");
        var favBtn = $("<button>");
        var isAFav = isAFavorite(data[i].name);
        if (isAFav){
            console.log("found a fav");
            favBtn.html("&starf;");
        } else {
            favBtn.html("&star;");
        }
        favBtn.attr("style", "color: #2D656D");
        favBtn.attr("class", "fav-btn");
        favBtn.attr("id", `btn-${i}`);
        brewContainer.append(favBtn);

        var brewName = $("<div>");
        brewName.attr("class", "bar-info");
        brewName.html(`<strong style="color: #2D656D">Name:</strong> <br>${data[i].name}`);       
        brewContainer.append(brewName);

        var brewAddress = $("<div>");
        brewAddress.attr("class", "bar-info");
        if (data[i].street != null){
            brewAddress.html(`<strong style="color: #2D656D">Address:</strong> <br>${data[i].street} ${data[i].city} ${data[i].state}`);
            brewContainer.append(brewAddress);
        } else {
            brewAddress.html(`<strong style="color: #2D656D">Address:</strong> <br>N/A`);
            brewContainer.append(brewAddress);
        }
        
        var brewPhone = $("<div>");
        brewPhone.attr("class", "bar-info");
        if (data[i].phone != null) {
            brewPhone.html(`<strong style="color: #2D656D">Phone:</strong><br>${data[i].phone}`);
            brewContainer.append(brewPhone);
        } else {
            brewPhone.html(`<strong style="color: #2D656D">Phone:</strong><br>N/A`);
            brewContainer.append(brewPhone);
        }
        
        var brewURL = $("<div>");
        brewURL.attr("class", "bar-info");
        if (data[i].website_url != null){
            brewURL.html(`<strong style="color: #2D656D">Website:</strong> <br><a href=${data[i].website_url}>Link</a>`);
            brewContainer.append(brewURL);
        } else {
            brewURL.html(`<strong style="color: #2D656D">Website:</strong><br>N/A`);
            brewContainer.append(brewURL);
        }
        searchResults.append(brewContainer);
    }
    $(".fav-btn").ready(function(){
        favBtnEl = $(".fav-btn");
        favBtnEl.on("click", markFavorite);
    })
}

// Get lat and lon data
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
    return;
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
    saveFavoriteData();
    return;
}

// Grab localstorage data
function parseFavorites(){
    if (!localStorage.getItem('brewFavorites')){
        localStorage.setItem('brewFavorites', '');
    } else {
       favoritesAsJSON = JSON.parse(localStorage.getItem('brewFavorites'));
        console.log(favoritesAsJSON);      
    }
    
    return;
}

// Save
function saveFavoriteData(){
    favoritesAsString = JSON.stringify(favoritesAsJSON);
    localStorage.setItem("brewFavorites", favoritesAsString);
}

// compare brewery results with favorites (localStore)
function isAFavorite(brewName){
    var found = false;
    for (var i=0; i<favoritesAsJSON.length; i++){
        if (favoritesAsJSON[i].name == brewName){
            found = true;
        }
    }
    return found;
}

parseFavorites();
retrieveParams();
$(".fav-btn").ready(function(){
    favBtnEl = $(".fav-btn");
    // console.log(favBtnEl);
    favBtnEl.on("click", markFavorite);
})
searchBtn.on("click", getInputValue);
favoriteBtnEl.on("click", getFavoriteData);
