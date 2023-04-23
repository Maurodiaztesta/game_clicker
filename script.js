var score = 0;
var upgrade1Cost = 10;
var upgrade2Cost = 50;
var upgrade3Cost = 300;
var clickValue = 1;
var autoValue = 0;

var clickBtn = document.getElementById("clickBtn");
var scoreDisplay = document.getElementById("score");
var upgrade1Btn = document.getElementById("upgrade1");
var upgrade2Btn = document.getElementById("upgrade2");
var upgrade3Btn = document.getElementById("upgrade3");

clickBtn.addEventListener("click", function() {
	score += clickValue;
	scoreDisplay.innerHTML = "Score: " + score;
	checkUpgrades();
});

upgrade1Btn.addEventListener("click", function() {
	if (score >= upgrade1Cost) {
		score -= upgrade1Cost;
		upgrade1Cost *= 2;
		upgrade1Btn.innerHTML = "Upgrade +1 - Cost: " + upgrade1Cost;
		clickValue++;
		clickBtn.innerHTML = "Click me! (" + clickValue + " points)";
		checkUpgrades();
		scoreDisplay.innerHTML = "Score: " + score;

        var upgrade1Circles = document.getElementById("upgrade1-circles");
        var circle = document.createElement("div");
        circle.classList.add("circle");
        upgrade1Circles.appendChild(circle);
	}
});

upgrade2Btn.addEventListener("click", function() {
	if (score >= upgrade2Cost) {
		score -= upgrade2Cost;
		upgrade2Cost *= 2;
		upgrade2Btn.innerHTML = "Upgrade +5 - Cost: " + upgrade2Cost;
		clickValue += 5;
		clickBtn.innerHTML = "Click me! (" + clickValue + " points)";
		checkUpgrades();
		scoreDisplay.innerHTML = "Score: " + score;

        var upgrade2Circles = document.getElementById("upgrade2-circles");
        var circle = document.createElement("div");
        circle.classList.add("circle2");
        upgrade2Circles.appendChild(circle);
	}
});

upgrade3Btn.addEventListener("click", function() {
	if (score >= upgrade3Cost) {
		score -= upgrade3Cost;
		upgrade3Cost *= 2;
		upgrade3Btn.innerHTML = "Upgrade AutoClick - Cost: " + upgrade3Cost;
		autoValue++;
		checkUpgrades();
		scoreDisplay.innerHTML = "Score: " + score;

        var upgrade3Circles = document.getElementById("upgrade3-circles");
        var circle = document.createElement("div");
        circle.classList.add("circle3");
        upgrade3Circles.appendChild(circle);
	}
});

setInterval(function() {
	score += autoValue;
	scoreDisplay.innerHTML = "Score: " + score;
}, 1000);

function checkUpgrades() {
	if (score < upgrade1Cost) {
		upgrade1Btn.classList.add("disabled");
	} else {
		upgrade1Btn.classList.remove("disabled");
	}
	if (score < upgrade2Cost) {
		upgrade2Btn.classList.add("disabled");
	} else {
		upgrade2Btn.classList.remove("disabled");
	}
	if (score < upgrade3Cost) {
		upgrade3Btn.classList.add("disabled");
	} else {
		upgrade3Btn.classList.remove("disabled");
	}
}

checkUpgrades()