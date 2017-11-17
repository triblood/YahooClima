var YQL = require('yql');

var query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="rio de janeiro")');

query.exec(function(err, data) {
    var location = data.query.results.channel.location;
    var condition = data.query.results.channel.item.condition;
    var temperatura = parseInt((condition.temp - 32) * (5 / 9));
    console.log('O clima em ' + location.city + ', ' + location.region + ' é de ' + temperatura + ' Celsius. O tempo está ' + condition.text);
    // console.log(condition);
});