var important = document.getElementsByClassName("important");

var infobulle = document.createElement("div");
var infobulletxt = document.createElement("span");
var infobullearr = document.createElement("div");

infobulle.id = "infobulle";
infobullearr.id = "arrow";
infobulle.append(infobullearr);
infobulle.append(infobulletxt);
document.body.append(infobulle);

for (var n in important) {
	if (!important.hasOwnProperty(n))
		continue;

	important[n].addEventListener("mouseenter", onBubbleEnter);
	important[n].addEventListener("mouseleave", onBubbleLeave);
}

function onBubbleEnter(e) {
	if (!e.target.hasAttribute("data-txt"))
		return;

	infobulle.style.top  = (e.target.offsetTop + e.target.offsetHeight + 10) + "px";
	infobulle.style.left =  e.target.offsetLeft + "px";
	infobulletxt.innerText  = e.target.getAttribute("data-txt");
	infobulle.classList.add("shown");
	
	if (infobulle.offsetLeft + infobulle.offsetWidth > document.body.offsetWidth)
		infobulle.classList.add("right");
}

function onBubbleLeave(e) {
	infobulle.classList.remove("shown");
	infobulle.classList.remove("right");
}