//Event handling
document.addEventListener("DOMContentLoaded", function (event) {
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.txt", function (request) {
            var name = request.responseText // request.responseText;
            // set name in index.html
            document.querySelector("#content").innerHTML = "Hello " + name + "!";
        });

    });
});