var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "lightbrown",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert(this.make + " " + this.model + " robi: brum wrr!");
		} else {
			aler("Najpierw musisz włączyć silnik.");
		}
	}
};

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert(this.make + " " + this.model + " robi: brum wrr!");
		} else {
			aler("Najpierw musisz włączyć silnik.");
		}
	}
};

var taxi = {	
	make: "SieMoCorp",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " robi: brum wrr!");
				this.fuel--;
			} else {
				alert("Brak paliwa!");
			}
		} else {
			aler("Najpierw musisz włączyć silnik.");
			this.stop();
		}
	},
	fuel: 0,
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

/*cadi.start();
cadi.drive();
cadi.stop();

chevy.start();
chevy.drive();
chevy.stop();
*/

taxi.start();
taxi.drive();
taxi.addFuel(2);
taxi.start();
taxi.drive();
taxi.drive();
taxi.stop();