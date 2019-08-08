$(document).ready(function () {

    $(document).on("keypress", "#search", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            var input = $("#search").val().trim();
            var queryURL = "https://rest.bandsintown.com/artists/" + input + "?app_id=codingbootcamp";
            // var queryURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + input;
            console.log(queryURL);
            console.log("search made");

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                //option to create a var and store a new div in it to utilize col-xs-4
                var artistName = $("<h1>").text(response.name);
                // var artistName = $("<h1>").text(response.query.pages.pageid.extract);
                var artistImage = $("<img>").attr("src", response.thumb_url);
                var artistBIT = $("<a><img src='assets/hand+logo.png' width='100' height='100''>").attr("href", response.url).attr("target", "_blank");
                var artistFB = $("<a><img src='assets/fb.png' width='100' height='100''>").attr("href", response.facebook_page_url).attr("target", "_blank");
                var fanCount = $("<h3>").text("Bands in Town Fan Count: " +  response.tracker_count);

                $("#artist-name").empty();
                $("#artist-detail").empty();
                $("#event-info").empty();
                $("#disco-info").empty();
                $("#lyrics-info").empty();
                $("#artist-name").append(artistName, artistImage);
                $("#artist-detail").append(artistBIT, artistFB, fanCount);
                //can we add a jquery function to make css appear when these details append
            })
        }
    })

    $(".artist-button").on("click", function () {
        event.preventDefault();
        var input = $("#search").val().trim();
        var queryURL = "https://rest.bandsintown.com/artists/" + input + "?app_id=codingbootcamp";
        console.log("artist bio button clicked");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var artistName = $("<h1>").text(response.name);
            var artistImage = $("<img>").attr("src", response.thumb_url);
            var artistBIT = $("<a><img src='assets/hand+logo.png' width='100' height='100''>").attr("href", response.url).attr("target", "_blank");
            var artistFB = $("<a><img src='assets/fb.png' width='100' height='100''>").attr("href", response.facebook_page_url).attr("target", "_blank");
            var fanCount = $("<h4>").text("Bands in Town Fan Count: " + response.tracker_count);
            $("#artist-name").empty();
            $("#artist-detail").empty();
            $("#event-info").empty();
            $("#disco-info").empty();
            $("#lyrics-info").empty();
            $("#artist-name").append(artistName, artistImage);
            $("#artist-detail").append(artistBIT, artistFB);
            $("#artist-detail").append(artistBIT, artistFB, fanCount);
        })
    })


})