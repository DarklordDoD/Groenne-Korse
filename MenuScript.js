// JavaScript Document


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




