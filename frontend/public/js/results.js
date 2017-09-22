$('[data-toggle="popover"]').popover();


//helper functions


waitForEl('button.disabled', function (elem) {
    $.each(elem,function (idx,el){
        $(el).attr("data-toggle","popover")
            .attr("data-content","We are still collecting data for this particular example. ")
            .attr("data-placement","bottom")
            .attr("data-trigger","hover")
            .attr("data-container","body");
        });


    console.log(elem)
    elem.popover();
});


waitForEl('.twitter-tweet-rendered', function(elem){
    console.log('found tweet class');
    $('.loading').hide();
});


function waitForEl(selector, callback) {
    if ($(selector).length) {
        callback($(selector));
    } else {
        setTimeout(function() {
            waitForEl(selector, callback);
        }, 100);
    }
};

function getParam(paramName) {
    let result = null,
        tmp = [];
    let items = window.location.search.substr(1).split('&');
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split('=');
        console.log('key:', tmp[0]);
        if (tmp[0] === paramName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}


