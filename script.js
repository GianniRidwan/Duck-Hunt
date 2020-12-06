var duck = document.getElementById("duck");
var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var posLeft = 450;
var posTop = 250;

function fly(){
	var number = Math.floor(Math.random() * directions.length);
	var direction = directions[number];


	if(direction == "N"){
		posTop -= 50;
		document.getElementById("duck").style.top = posTop + "px";
	}

	else if(direction == "NE"){
		posTop -= 50;
		posLeft += 50;
		document.getElementById("duck").style.top = posTop + "px";
		document.getElementById("duck").style.left = posLeft + "px";
	}

	else if(direction == "E"){
		posLeft += 50;
		document.getElementById("duck").style.left = posLeft + "px";
	}

	else if(direction == "SE"){
		posLeft += 50;
		posTop += 50;
		document.getElementById("duck").style.left = posLeft + "px";
		document.getElementById("duck").style.top = posTop + "px";
	}

	else if(direction == "S"){
		posTop += 50;
		document.getElementById("duck").style.top = posTop + "px";
	}

	else if(direction == "SW"){
		posLeft -= 50;
		posTop += 50;
		document.getElementById("duck").style.left = posLeft + "px";
		document.getElementById("duck").style.top = posTop + "px";
	}

	else if(direction == "W"){
		posLeft -= 50;
		document.getElementById("duck").style.left = posLeft + "px";
	}

	else{
		posLeft += 50;
		posTop -= 50;
		document.getElementById("duck").style.left = posLeft + "px";
		document.getElementById("duck").style.top = posTop + "px";
	}
}

setInterval(function(){
	fly();
},500);


var hit = document.getElementById("hit");
var miss = document.getElementById("miss");
var container = document.getElementById("container");

var count1 = 1;
var count2 = 1;

duck.addEventListener("click", function(){
	hit.innerHTML = "HIT: " + count1++;
});

container.addEventListener("click", function(){
	miss.innerHTML = "MISS: " + count2++;
});

