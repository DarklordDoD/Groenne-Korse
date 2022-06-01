// JavaScript Document

//burger menu
const togglebutton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

togglebutton.addEventListener('click',() => {
	navbarLinks.classList.toggle('active')
})

//skift sprog knap
const alleSprog = ["DK","EN"];
let sprogLength = alleSprog.length;
let valgtSprog = 1;
const titelSprog = ["Mærke Navn","Brand Name",];
const menuHjem = ["Hjem","Home",];
const menuInfo = ["Info","Info",];
const menuOm = ["Om Os","About Us",];
const menuKon = ["Kontakt","Contact",];

function sprog(){	
	//roter mellem sprogene
	if (valgtSprog >= sprogLength){
		valgtSprog = 1;
	} else {
		valgtSprog += 1;
	}
	//ændre teksten
	document.getElementById("sprogText").innerHTML = alleSprog[valgtSprog-1];
	document.getElementById("brandTitle").innerHTML = titelSprog[valgtSprog-1];
	document.getElementById("hKnap").innerHTML = menuHjem[valgtSprog-1];
	document.getElementById("iKnap").innerHTML = menuInfo[valgtSprog-1];
	document.getElementById("oKnap").innerHTML = menuOm[valgtSprog-1];
	document.getElementById("kKnap").innerHTML = menuKon[valgtSprog-1];
}