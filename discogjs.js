// Global variables go here
var artistMBID;

// Function to empty page once page loads
$(document).ready(function emptyPage() {
    $("#disco-info").empty();

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
$("#disco-button").click(function searchDiscography() {
    console.log("DISCOGRAPHY BUTTON CLICKED");
    $("#artist-info").empty();
    $("#event-info2").empty();
    // TEST Query result
    // var queryURL2 = "http://musicbrainz.org/ws/2/artist/9fff2f8a-21e6-47de-a2b8-7f449929d43f?inc=releases&fmt=json";
    
    // WANT TO USE THIS BUT NEED TO GET artistMBID var
    var queryURL2 = "https://musicbrainz.org/ws/2/artist/" + artistMBID + "?inc=releases&fmt=json";
    
    // Ajax GET method to get response info for albums
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL2);
        console.log(response);

        var albums = response.releases;
        // var artistID = response.id;
        var albumName = $("<h3>").text(albums[0].title);
        
        // FOR loop to run through the list of albums
        for (i = 0; i < albums.length; i++) {
            console.log(albums[i].title);
            var albumName = $("<li>").text(albums[i].title);
            
            // Append to  #disco-info div   ****NEED TO WORK ON THIS****

            $("#disco-info").append(albumName);
        };
    });
});
});



//     $("#search").on("click", function(event) {
//         event.preventDefault();
//         var inputArtist = $("#search").val().trim();
//         searchDiscography(inputArtist);
// })

// });
// });

// ========  NOTES  ==========
// step 1: go on bandsintown and grab mbid for artist
// step 2: go on musicbrainz, pull neccessary info