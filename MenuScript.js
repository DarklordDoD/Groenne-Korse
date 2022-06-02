// JavaScript Document

/*--------------------------------------------------------------------*/	
/*----------------------------(Header)--------------------------------*/

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener("resize", () => {
	if (window.matchMedia("(min-width: 768px)").matches) {
		document.getElementById("myLinks").style.display = "flex";
	} else {
		document.getElementById("myLinks").style.display = "none";
	}
});


/*--------------------------------------------------------------------*/	
/*----------------------------(Sprog)--------------------------------*/

const alleSprog = ["DK","EN"];
let sprogLength = alleSprog.length;
let valgtSprog = 1;
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
	document.getElementById("hKnap").innerHTML = menuHjem[valgtSprog-1];
	document.getElementById("iKnap").innerHTML = menuInfo[valgtSprog-1];
	document.getElementById("oKnap").innerHTML = menuOm[valgtSprog-1];
	document.getElementById("kKnap").innerHTML = menuKon[valgtSprog-1];
}




