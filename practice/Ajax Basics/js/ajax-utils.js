// IIFE
(function (global) {

    // setup/fake a namespace for our utility
    var ajaxUtils = {};

    //Return an HTTP request object
    function getRequestObject() {
        if (global.XMLHttpRequest) {
            return (new XMLHttpRequest);
        }
        else if (global.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported");
            return (null);
        }
    }

    // Makes an Ajax GET request to resuestURL
    ajaxUtils.sendGetRequest = 
        function(requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange = 
                function() {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null); // for POST only
        };

    // Only calls user provided response handler function if response is ready and not an error
    function handleResponse(request, responseHandler) {
        if ((request.readyState==4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;

})(window);