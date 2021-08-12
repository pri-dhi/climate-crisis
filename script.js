var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
 if (scriptBtn) { //sometimes dom doesnt load all the way? check vid
   scriptBtn.addEventListener("click", generateScript);
 }

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support the Green New Deal to enforce significant funding towards a Civilian Climate Corps, renewable energy, public housing, schools, transportation, as well as strengthened unions and worker protections, withdrawing fossil fuel subsidies, and providing at least 40% of investments to frontline communities. It is important that we make changes immediately to prevent further damage to our environment. Anything short is a faliure of our generation towards countering the effects of the climate crisis that is occuring before our very eyes. Please support the Green New Deal to properly combat the effects of climate change."
}

var factList = [
  "Humans have already heated the planet by roughly 1.1 degrees Celsius, or 2 degrees Fahrenheit, since the 19th century, largely by burning coal, oil and gas for energy.", "The last decade is quite likely the hottest the planet has been in 125,000 years. The world’s glaciers are melting and receding at a rate “unprecedented in at least the last 2,000 years.”", "Heat waves have become significantly hotter since 1950 and last longer in much of the world. Wildfire weather has worsened across large swaths of the globe."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList [count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
