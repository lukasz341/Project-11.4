function Phone (brand, price, color, system, screensize) {
	this.brand=brand;
	this.price=price;
	this.color=color;
	this.system=system;
	this.screensize=screensize;
}
Phone.prototype.printInfo=function (){
	console.log ("The phone brand is: "+this.brand+ " The phone price is: "+this.price+ " The phone color is: "+this.color+" The phone system is: "+this.system+".");
}

Phone.prototype.screenInfo=function (){
	if (this.screensize<5) {
		console.log("The phone screen size is medium");	
	}
	else {
		console.log("The phone screen size is large");
	}
}
var iPhone6s = new Phone("Apple",2200, "silver", "iOS", 4.70);
var GalaxyS6 = new Phone("Samsung",1800, "black", "Android", 5.10);
var OnePlusOne = new Phone("Samsung",1500, "white", "Android", 5.50);
iPhone6s.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();

iPhone6s.screenInfo();
GalaxyS6.screenInfo();
OnePlusOne.screenInfo();