$.ajax({
    crossOrigin: true,
    url: "http://api.cr-api.com/clan/CYJ2V",
    dataType: "json",
    success: processData,
    error: function(){ alert("failed"); }
});

function processData(data)
{
    //do something with data
}