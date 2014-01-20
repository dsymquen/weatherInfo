$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(function(P){
        
        console.log(P.coords.latitude);
        console.log(P.coords.longitude);
        var url = 'http://forecast.weather.gov/MapClick.php?lat='+P.coords.latitude+'&lon='+P.coords.longitude+'&unit=0&lg=english&FcstType=dwml';
        console.log(url);
        $.get(url,function(d){
            $('section').html(d);
        })
    });

});
