$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(function(P){
        
        console.log(P.coords.latitude);
        console.log(P.coords.longitude);
        var url = 'http://forecast.weather.gov/MapClick.php?lat='+P.coords.latitude+'&lon='+P.coords.longitude+'&unit=0&lg=english&FcstType=dwml';
        //http://forecast.weather.gov/MapClick.php?lat=40.52880&lon=-74.3693&unit=0&lg=english&FcstType=json
        console.log(url);
        $.get(url,function(d){
            $('section').html(d);
        })
    });

});
