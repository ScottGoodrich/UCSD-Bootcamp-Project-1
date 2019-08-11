$(document).ready(function () {

    $(document).on("keypress", "#search", function (event) {
        if (event.keyCode === 13) {
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
            var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + input + "&apikey=xwUI0GkDheBWJnroGGqQsxnOUKENdh4p";
            console.log("artist button clicked");
            $.ajax({
                url: queryURL,
                method: "GET",
                async: true,
                dataType: "json",
            }).then(function(response) {
                console.log(response);
                var artistName = $("<h1>").text(input).addClass("artistName");
                var artistImage = $("<img>").attr("src", response._embedded.attractions[0].images[0].url).addClass("artistImage");
                // $("#artist-icons").show();
    
                //external link to youtube:
                if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('youtube')) {
                    console.log("youtube");
                    var youTube = response._embedded.attractions[0].externalLinks.youtube[0].url;
                    var youTubeButton= $("<a><img src='assets/yt.png' width='100' height='100''>").attr("href",youTube).attr("target", "_blank");
                }
    
                //external link to instagram:
                if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('instagram')) {
                    console.log("instagram");
                    var instagram = response._embedded.attractions[0].externalLinks.instagram[0].url;
                    var instagramButton= $("<a><img src='assets/ig.png' width='100' height='100''>").attr("href",instagram).attr("target", "_blank");
                }

                //external link to facebook:
                if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('facebook')) {
                    console.log("facebook");
                    var facebook = response._embedded.attractions[0].externalLinks.facebook[0].url;
                    var facebookButton= $("<a><img src='assets/fb.png' width='100' height='100''>").attr("href",facebook).attr("target", "_blank");
                }

                $("#artist-name").prepend(artistName);
                $("#artist-name").append(artistImage);
                $("#artist-detail").append(youTubeButton, instagramButton, facebookButton);
                
            })
            
            var input = $("#search").val().trim();
            var queryURL2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + input + "&api_key=6d33317e3983483a5e8cf49901e8dcad&format=json";
            
            // Ajax GET method to pull info
            $.ajax({
                url: queryURL2,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                var artistBio = $("<div id='target' style='overflow: scroll; width: 100%; height: 200px;'>.").text(response.artist.bio.content);
                
                $("#artist-bio").prepend(artistBio);
                
        })
    }
    })




    $("#artist-button").on("click", function () {
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
        var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + input + "&apikey=xwUI0GkDheBWJnroGGqQsxnOUKENdh4p";
        console.log("artist button clicked");
        $.ajax({
            url: queryURL,
            method: "GET",
            async: true,
            dataType: "json",
        }).then(function(response) {
            console.log(response);
            var artistName = $("<h1>").text(input);
            var artistImage = $("<img>").attr("src", response._embedded.attractions[0].images[0].url).addClass("artistImage");
            // $("#artist-icons").show();

            //external link to youtube:
            if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('youtube')) {
                console.log("youtube");
                var youTube = response._embedded.attractions[0].externalLinks.youtube[0].url;
                var youTubeButton= $("<a><img src='assets/yt.png' width='100' height='100''>").attr("href",youTube).attr("target", "_blank");
            }
          
            //external link to instagram:
            if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('instagram')) {
                console.log("instagram");
                var instagram = response._embedded.attractions[0].externalLinks.instagram[0].url;
                var instagramButton= $("<a><img src='assets/ig.png' width='100' height='100''>").attr("href",instagram).attr("target", "_blank");
            }
            
            //external link to facebook:
            if (response._embedded.attractions[0].hasOwnProperty('externalLinks') && response._embedded.attractions[0].externalLinks.hasOwnProperty('facebook')) {
                console.log("facebook");
                var facebook = response._embedded.attractions[0].externalLinks.facebook[0].url;
                var facebookButton= $("<a><img src='assets/fb.png' width='100' height='100''>").attr("href",facebook).attr("target", "_blank");
            }

            $("#artist-name").prepend(artistName);
            $("#artist-name").append(artistImage);
            $("#artist-detail").append(youTubeButton, instagramButton, facebookButton);
            
        })
        
        var input = $("#search").val().trim();
        var queryURL2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + input + "&api_key=6d33317e3983483a5e8cf49901e8dcad&format=json";
        
        // Ajax GET method to pull info
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var artistBio = $("<div id='target' style='overflow: scroll; width: 100%; height: 200px;'>.").text(response.artist.bio.content);
           
            $("#artist-bio").prepend(artistBio);
    })

})
   
});



