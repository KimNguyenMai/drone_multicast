var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.on('navdata', function(data){
  //var bat=data.demo.batteryPercentage;
  //console.log(bat);
  var obj = JSON.parse(data);
  console.log(obj.data.demo());
});