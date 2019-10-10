function getImages(pageNumber, successCallback) {
    $.ajax({
        url: `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, 
        success: successCallback
    });
}