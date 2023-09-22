$(document).ready(function() {
    // Add a click event handler to the button
    $("#load-data").click(function() {
        // Make an Ajax GET request
        $.ajax({
            url: "https://api.example.com/data",
            method: "GET",
            dataType: "json",
            success: function(response) {
                // Handle a successful response
                $("#result").html("Data: " + response.data);
            },
            error: function(xhr, status, error) {
                // Handle errors
                $("#result").html("Error: " + status);
            }
        });
    });
});
