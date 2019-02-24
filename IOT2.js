var arDrone = require('ar-drone');

var client1  = arDrone.createClient({ip:"192.168.1.10"});
var client2  = arDrone.createClient({ip:"192.168.1.20"});
var client3  = arDrone.createClient({ip:"192.168.1.30"});
var client4  = arDrone.createClient({ip:"192.168.1.40"});


client1.takeoff();

	client1
		.after(2000, function() {
		this.up(1);
	})
		.after(2000, function() {
		this.animate('flipAhead',500);
	})
		.after(2000, function() {
    	this.stop();
		this.land();
	});

client2.takeoff();

	client2
		.after(2000, function() {
		this.up(1);
	})
		.after(2000, function() {
		this.animate('flipAhead',500);
	})
		.after(2000, function() {
		this.stop();    
		this.land();
	});

client3.takeoff();

	client3
		.after(2000, function() {
		this.up(1);
	})
		.after(2000, function() {
		this.animate('flipAhead',500);
	})
		.after(2000, function() {
		this.stop();    
		this.land();
	});

client4.takeoff();

	client4
		.after(2000, function() {
		this.up(1);
	})
		.after(2000, function() {
		this.animate('flipAhead',500);
	})
		.after(2000, function() {
		this.stop();    
		this.land();
	});