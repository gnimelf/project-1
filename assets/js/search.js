var searchInput = $("#search-input")
var searchBtn = $("#search-btn");

function performSearch(event){
    if (event.target.id === "search-btn"){
        var queryString = './results.html?=' + searchInput.val()
        location.assign(queryString);
    }


}

searchBtn.on("click", performSearch);