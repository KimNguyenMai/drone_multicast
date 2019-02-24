var arDrone = require('ar-drone');

var client1  = arDrone.createClient({ip:"192.168.1.10"});
var client2  = arDrone.createClient({ip:"192.168.1.20"});
var client3  = arDrone.createClient({ip:"192.168.1.30"});
var client4  = arDrone.createClient({ip:"192.168.1.40"});

console.log("Drones are firing up...!!!");

fly(client1,"drone_1");
fly(client2,"drone_2");
fly(client3,"drone_3");
fly(client4,"drone_4");

console.log("Drones are landing...!!!");

function fly(client,drone){
	
	try{
		client.takeoff();

		client
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
	}catch(e){
		console.log("Error has occured with "+drone+" :\n"+e);
	}
}
function Jfly(client,drone){
	
	try{
		client.takeoff();

		client
			.after(5000, function() {
			this.clockwise(0.5);
		})
			.after(3000, function() {
			this.animate('flipLeft', 15);
		})
			.after(1000, function() {
			this.stop();
			this.land();
		});
	}catch(e){
		console.log("Error has occured with "+drone+" :\n"+e);
	}
}

function sqaure(client,drone){
	
	try{
	client.takeoff();

	client
	.after(8000, function() {
		this.left(0.2);
	})	
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.front(0.25);
	})	
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.right(0.2);
	})
	.after(2000, function() {
		this.stop();
	})
	.after(2000, function() {
		this.back(0.25);
	})	
	.after(3000, function() {
		this.stop();
	})
	.after(3000, function() {
		this.land();
	});
	}catch(e){
		console.log("Error has occured with "+drone+" :\n"+e);
	}
}