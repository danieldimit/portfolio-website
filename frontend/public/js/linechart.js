function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function caculateTransparentColor(foregroundColor, backgroundColor, opacity) {
    if (opacity < 0.0 || opacity > 1.0) {
        alert("assertion, opacity should be between 0 and 1");
    }
    opacity = opacity * 1.0; // to make it float
    var foregroundRGB = hexToRgb(foregroundColor);
    var backgroundRGB = hexToRgb(backgroundColor);
    var finalRed = Math.round(backgroundRGB.r * (1-opacity) + foregroundRGB.r * opacity);
    var finalGreen = Math.round(backgroundRGB.g * (1-opacity) + foregroundRGB.g * opacity);
    var finalBlue = Math.round(backgroundRGB.b * (1-opacity) + foregroundRGB.b * opacity);
    return rgbToHex(finalRed, finalGreen, finalBlue);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
}
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if(pair[0]==variable){return pair[1];}
    }
    return false;
}
var opacity = 0.4;
var graphId = getQueryVariable("graphId");
//"890908329702293506"
//var colors = ["#66a61e","#7570b3","#d95f02","#1b9e77","#000033",
//              "#66a61e","#7570b3","#d95f02","#1b9e77","#000033"]
var d3Colors = d3.scaleOrdinal(d3.schemeCategory20a);
colors = Array();
for(c=0;c<30;c++)
{
    colors[c] = d3Colors(c)
}

d3.select("#linechart").remove()
var margin = {top : 20, right : 20, bottom : 30, left : 50}

// height and width of svg
var height = document.getElementById("history").offsetHeight - 50;
var width = document.getElementById("history").offsetWidth - 80;


var played = false;
var tstep;
var stepLine;
var timer;
var begin;
var end;
xHistory = d3.scaleTime().range([0,width]);
yHistory = d3.scaleLinear().range([height,0]);
var svg = d3.select("#history")
    .append("svg").attr("id","linechart")
    .attr("width",width+margin.left+margin.right)
    .attr("height",height+margin.bottom+margin.top);

var linechart = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")")
d3.json(requestURL, function(error, data){
    if(error)
    {
        console.info(error);
    }

    ext = d3.extent(data.nodes,function(d){return d3.isoParse(d.date)})
    tbuckets = Math.round(Math.abs(ext[0] - ext[1]) / (60*1000));
    console.info(ext)
    buckets = Array(tbuckets)
    for(i=0;i<buckets.length;i++)
    {
        buckets[i]={}
        buckets[i].date = new Date(ext[0].getTime() + (i*60*1000));
        buckets[i].val = 0;
    }
    console.info(data.nodes)
    for(i=0;i<data.nodes.length;i++)
    {
        b = Math.round(Math.abs(ext[0]-d3.isoParse(data.nodes[i].date))/(60*1000));
        //console.info(b)
        for(j=b;j<buckets.length;j++)
        {
            buckets[j].val++;
        }
    }

    console.info(ext);
    console.info(buckets)
    line = d3.line().x(function(d){ return xHistory(d.date)})
        .y(function(d){ return yHistory(d.val)})
        .defined(function(d){return d})
    xHistory.domain(ext);
    yHistory.domain([0,Math.ceil(buckets[buckets.length-1].val*1.10)]);
    var paths = linechart.append("path").attr("class","line").attr("d",line(buckets));

    linechart.append("g").attr("class", "axis axis--y")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xHistory));
    linechart.append("g").attr("class", "axis axis--y")
        .call(d3.axisLeft(yHistory))
        .append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Retweets");
    //TODO Create Brush for loads
    var brush = d3.brushX().extent([[0,0],[parseInt(width),parseInt(height)]]).on("brush end",brushed);
    linechart.append("g").attr("class","brush").call(brush).call(brush.move, [xHistory(d3.isoParse(ext[0])),xHistory(d3.isoParse(ext[1]))])


    $('#info > .loading').hide();
})

function brushed()
{

    if(d3.event.sourceEvent && d3.event.sourceEvent.type == "zoom") return;
    var s = d3.event.selection;
    tstep = begin;
    begin = xHistory.invert(s[0])
    end = xHistory.invert(s[1])
    sigmaInstance.graph.nodes().forEach(function(node,i){
        var d = d3.isoParse(node.date)
        if(node.level!=0)
        {
            if(d>=begin && d<=end)
            {
                node.hidden=false;
            }
            else
            {
                node.hidden=true;
            }
        }
    })
    sigmaInstance.refresh()
}

function stop()
{
    d3.select("#stepline").remove();
    tstep = begin;
    clearInterval(timer);
    played=false;
    dom = yHistory.domain();
    linechart.append("line").attr("id","stepline").attr("x1",xHistory(tstep)).attr("x2",xHistory(tstep)).attr("y1",yHistory(dom[0])).attr("y2",yHistory(dom[1]))
}

function play()
{
    console.log('play');
    if(!played)
    {
        sigmaInstance.graph.nodes().forEach(function(node,i){
            node.hidden=true;
        })
        timer = setInterval(function(){
            d3.select("#stepline").remove();
            tstep = new Date(tstep.getTime() + 60*1000)
            dom = yHistory.domain();
            linechart.append("line").attr("id","stepline").attr("x1",xHistory(tstep)).attr("x2",xHistory(tstep)).attr("y1",yHistory(dom[0])).attr("y2",yHistory(dom[1]))
            console.info(tstep)
            $("#timer").text(tstep.toUTCString());

            sigmaInstance.graph.nodes().forEach(function(node,i){
                var d = d3.isoParse(node.date)
                if(node.level!=0)
                {
                    if(d>=begin && d<=tstep)
                    {
                        node.hidden=false;
                    }
                    else
                    {
                        node.hidden=true;
                    }
                }
                if(tstep>=end)
                {
                    clearInterval(timer)
                }
            })
            sigmaInstance.refresh()
        },10)
        played = true;
    }
    else
    {
        clearInterval(timer);
        played=false;
    }
}

