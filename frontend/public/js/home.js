$(document).ready(function(){
    $.get('static-api-req/keywords.json', function(res){
        console.log(res.name);
    })
});
