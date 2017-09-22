var colors = ['#66a61e', '#7570b3', '#d95f02', '#1b9e77', '#000033'];
var id = getParam('id');
console.log(id)
var requestURL = 'https://api.fakenewsgraph.de/graphs/' + id;

g = { nodes: [], edges: [] };

var config = {
    graph: g,
    container: 'graph',
    type: 'canvas',
    settings: {
        minNodeSize: 4,
        maxNodeSize: 16,
        minEdgeSize: 1,
        maxEdgeSize: 8
    }
};

var sigmaInstance = new sigma(config);

Graph.createGraph(sigmaInstance, requestURL, colors);
// hide loading spinner
$('#graph .loading').hide();


// Button play / stop listeners
$(document).ready(function() {
    $('#stop').click(function() {
        stop();
    });

    $('#play').click(function() {
        play();
    });

    $('#zoom-in').click(function() {
        Graph.zoomIn(sigmaInstance);
    });

    $('#zoom-out').click(function() {
        Graph.zoomOut(sigmaInstance);
    });

    $('#download').click(function(){
        Graph.exportData(sigmaInstance);
    })
    $('#snapshot').click(function(){
        Graph.exportGraphSnapshot(sigmaInstance);
    })
});


// init popover and tooltips
$('[data-toggle="popover"]').popover();




waitForEl('#legend svg', function(){
    $('#legend .loading').hide();
});

waitForEl('#history svg', function(){
    $('#history .loading').hide();
});
waitForEl('#graph canvas', function(){



    $("twitterwidget").attr("data-toggle","popover")
        .attr("data-content","This is the initial tweet (root) which started the diffusion. The biggest circle on the graph represents the retweets of the original message. ")
        .attr("data-placement","top")
        .attr("data-trigger","hover")
        .attr("data-container","body")

    $("twitterwidget").popover();
});


//helper functions

function waitForEl(selector, callback) {
    if ($(selector).length) {
        callback();
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


