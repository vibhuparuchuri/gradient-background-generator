var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	 + color1.value
	 + ", "
	 +color2.value
	 +")";

	 css.textContent = body.style.background + ";";
}

function valueToHEX(c) {
    var hex = c.toString(16);
    if (hex.length === 1) {
        return "0" + hex;
    }
    return hex;
  }

// Converts RBG to hex
function rgbToHex(r, g, b) {
    return (valueToHEX(r) + valueToHEX(g) + valueToHEX(b));
}

function changeBackground()
{
	var min = 0;
	var max = 256;

	var rgb = [];

	for(var i = 0; i< 6;i++)
	{
		rgb.push(Math.floor(Math.random()*(max-min)+min));
	}

	color1.value = "#" + rgbToHex(rgb[0],rgb[1],rgb[2]);
	var button = document.querySelector("button");
	console.log(button.classList);
	button.style.border = "5px solid" + color1.value;
	color2.value = "#" + rgbToHex(rgb[3],rgb[4],rgb[5]);
	button.style.background = color2.value;
	setGradient();

}
window.onload = setGradient();

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",changeBackground);
