$(document).ready(function () {

$("#similar-artists-button").on("click", function (event) {
    event.preventDefault();
    $("#artist-name").empty();
    $("#artist-bio").empty();
    $("#artist-detail").empty();
    $("#artist-icons").empty();
    $("#event-info").empty();
    $("#logo-div").empty();
    $("#disco-info").empty();
    $("#similar-info").empty();
    var input = $("#search").val().trim();
    // last.fm api
    var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + input + "&api_key=6d33317e3983483a5e8cf49901e8dcad&limit=10&format=json";
    console.log("similar artists button clicked");
    
    // Ajax GET method to pull info
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        var a = response.similarartists.artist;
        var array = [a[0].name, a[1].name, a[2].name, a[3].name, a[4].name, a[5].name, a[6].name, a[7].name, a[8].name, a[9].name];
   
        $("#similar-info").prepend("<h3><u> 10 Similar Artists").addClass("sim");

        // used loDash to console log 10 similar artists and append to div
        _.each(array, function (artists) {
            console.log(artists);
            $("#similar-info").append("<ul>").append("<li>"+ artists).addClass("sim");
        })
            

    })

})
});
 