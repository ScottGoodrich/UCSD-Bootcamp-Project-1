// Global variables go here
var artistMBID;

    
// PULL MBID FROM BANDSINTOwN
$(document).on("keypress", "#search", function(event) {
    // IF statement - when [Enter] is pressed...
    if (event.keyCode === 13) {
    var artist = $("#search").val().trim();
    var artistID = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    
    // Ajax GET method to pull info
    $.ajax({
        url: artistID,
        method: "GET"
    }).then(function(response) {
        console.log(artistID);
        console.log(response.mbid);
        artistMBID = response.mbid;
    })
    }
});


// Pull album info from musicbrainz 
$("#disco-button").click(function() {
    console.log("DISCOGRAPHY BUTTON CLICKED");
    $("#artist-info").empty();
    $("#artist-name").empty();
    $("#artist-bio").empty();
    $("#artist-detail").empty();
    $("#event-info2").empty();
    $("#event-info").empty();
    $("#logo-div").empty();
    $("#similar-info").empty();
    $("#disco-table-head").append("<tr><th>Album releases</th><tr>");
    
    var queryURL2 = "https://musicbrainz.org/ws/2/artist/" + artistMBID + "?inc=releases&fmt=json";
    
    // Ajax GET method to get response info for albums
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL2);
        console.log(response);

        var albums = response.releases;
        var albumName = $("<h5>").text(albums[0].title);
        
        // FOR loop to run through the list of albums
        for (i = 0; i < albums.length; i++) {
            console.log(albums[i].title);
            var albumName = albums[i].title;
            
            // Append to  #disco-info div   ****NEED TO WORK ON THIS****
            $("#disco-body").append("<tr><td>" + albumName + "</td></tr>");
            
        };
    });
});