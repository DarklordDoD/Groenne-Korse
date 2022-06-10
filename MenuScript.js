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
/*----------------------------(Footer)--------------------------------*/

var sreenH = window.innerHeight;
var docH = (document.height !== undefined) ? document.height : document.body.offsetHeight;

if (docH > sreenH){
		document.getElementById("footerboks").style.position = "inherit";
	} else {
		document.getElementById("footerboks").style.position = "fixed";
}

/*--------------------------------------------------------------------*/	
/*----------------------------(Sprog)--------------------------------*/

const alleSprog = ["DK","EN"];
let sprogLength = alleSprog.length;
let valgtSprog = 1;
const menuHjem = ["Info","Info",];
const menuInfo = ["Mål","Goals",];
const menuOm = ["Om Os","About Us",];
const menuKon = ["Kontakt","Contact",];

/*----------------------------(Kontakt side)--------------------------------*/

const contaktTittle = ["Kontakt","Contact"];
const contaktIntro = ["Hvis du har nogle spørgsmål, så kontakt os på de følgende platformer.","If you have any questions, please contact us on the following platforms."]

/*----------------------------(VerdensMål side)--------------------------------*/

const verdensTittle = ["FN's Verdensmål","UN's Goals"];

const verdensIntro = ["FN har 17 verdensmål, som er til for at sætte en kurs mod en mere bæredygtig udvikling for både mennesker og planeten vi bor på. Igennem vores arbejde med udvinding og genanvendelse af affaldsprodukter er vi med til at hjælpe til med 7 af disse verdensmål.","The UN has 17 goals, which are there to set a course towards a more sustainable development for both humans and the planet we live on. Through our work with extracting and recycling waste products, we help with 7 of those goals."];

const verdens6 = ["6 (Rent vand og sanitet): Vi har det godt herhjemme i Danmark, når det kommer til rent drikkevand. Men vandmangel er stadig et problem for mere end 40% af verdenens befolkning. Vi tror på, at vi igennem vores bæredygtighed og genbrug sørger for at formindske mængden af skrald, som skader kvaliteten af vores grundvand.","6 (Clean water and sanitation): We are quite comfortable here in Denmark, when it comes to having clean drinking water. But water shortages are still a problem for more than 40% of the population of the world. We believe that with our sustainability and recycling, we are making sure to reduce the amount of waste, which hurts the quality of our groundwater."];

const verdens7 = ["7 (Bæredygtig energi): Vi har gjort det til en prioritet at gøre vores processer så bæredygtige som muligt. Det betyder at vi gør vores bedste for at holde vores Co2-aftryk så langt nede som muligt. Det gør vi gennem altid at gøre brug af den nyeste og mest bæredygtige teknologi på markedet.","7 (Affordable and clean energy): We have made it a priority to make our processes as sustainable as possible. That means that we are doing our very best to keep our Co2 footprint as low as possible. We achieve this by using only the newest and most sustainable technologies on the market."];

const verdens11 = ["11 (Bæredygtige byer og lokalsamfund): Vi kan godt lide at passe på klimaet. Derfor gør vi også hvad vi kan for at sprede budskabet om, at hverdagens affaldshåndtering faktisk også er vigtig. Derigennem håber vi på at få befolkningen også gør deres del, og derigennem vil byerne blive renere og miljøvenlige steder at bo.","11 (Sustainable cities and communities): We like to take care of the climate. That is why we do what we can to spread the word about how everyday waste management is also important. Through that we strive to make the general population do their part, which will make society a cleaner and environmentally friendly place to live."];

const verdens12 = ["12 (Ansvarligt forbrug og produktion): Vi har et meget stort problem når det kommer til overforbrug. Måden vi forbruger i dag, sætter store aftryk på naturen. Det er her virksomheder som vores bliver vigtige. Vi arbejder med udvinding og genanvendelse af affald, så vores mission er netop at genbruge så meget vi kan, på den mest bæredygtige måde muligt.","12 (Responsible consumption and production): We have a big problem when it comes to overconsumption. The way we consume today is leaving large imprints on nature. This is where businesses like ours becomes important. We work with treatment and recycling of waste, so our mission is to reuse as much as we can, in the most sustainable ways possible."];

const verdens13 = ["13 (Klima indsats): Klimaforandringerne koster vores verden dyrt. Både gennemsnitstemperaturen og antallet af klimarelaterede katastrofer er stødt stigende, og udledningen af drivhusgasser er nu mere end 50% højere end i 1990. Der er behov for en større klimindsats med det samme, og derfor gør vi hvad vi kan for at hjælpe klimaet.","13 (Climate action): The change in climate is costing our world dearly. Both the average temperature and the number of climate-related disasters are steadily rising, and greenhouse gas emissions are now more than 50% higher than it was in 1990. A greater climate effort is needed immediately, and therefore we are doing everything we can to help the climate."];

const verdens14 = ["14 (Livet i havet) Havforurening er et stort, og stadig voksende problem. Ifølge FN er der i dag 13.000 stk. plastikaffald på hver kvadratmeter i havet. Dette er bare en af mange grunde til at vi gør hvad vi gør. Ved at genbruge så meget skrald som muligt, hjælper vi på den måde også til med rengøringen af havet.","14 (Life below water) Marine pollution is a major and ever-growing problem. According to the UN, there are currently 13.000 pieces of plastic waste pr. square meter in the sea. This is just one of the many reasons why we do what we do. By recycling as much waste as possible we make sure that less waste ends in the oceans."];

const verdens15 = ["15 (Livet på land): Jorden er mindst lige så livsvigtig for os som havet. Vi får omtrent 80% af vores kost fra planteliv og landbrug. Derfor gør vi vores bedste for at holde jorden så ren som muligt, igennem vores behandling af skrald, som vi ofte udvinder fra jorden.","15 (Life on land): Earth is at least as vital to as the oceans. 80% of our food is made from plant life and agriculture. That is why we do our best to keep the planet as clean as possible, through our treatment of waste, which we often find buried underground."];

const verdensMore = ["Læs mere om verdensmålene på:","Read more about the world goals at:"];

/*----------------------------(Om Os side)--------------------------------*/

const omP1 = ["Vi her i Waste Treatment DK beskæftiger os med udvinding og behandling af affald, og vi finder derigennem de materialer, som kan genanvendes. Det meste af dette affald finder vi begravet under jorden.","We here at Waste Treatment DK work with extraction and treatment og waste, and through that we find the materials that can be recycled. We find a large portion of our waste buried underground."];

const omP2 = ["Vi drømmer om, at der i fremtiden ikke vil være brug for vores type virksomhed, til genanvendelse af råmaterialer udvundet fra affald. Derfor gør vi også opmærksom på hvad du selv kan gøre for klimaet, gennem affaldshåndtering i hverdagen.","We have a dream that our kind of business won’t be necessary for reapplication of the raw materials that can be found in waste products in the future. That is why we also try to encourage people to make an effort of their own, through how they privately handle waste."];

const omP3 = ["Vi ved godt at vi alene ikke kan redde hele verdenen, men vi vil gøre så meget vi kan. Derfor er vores prioritering at gøre så processerne er så bæredygtige så muligt.","We are aware that we alone cannot save the world, but we will do what we can. That is why our priority is to make the individual processes as sustainable as possible."];

/*----------------------------(roter mellem sprogene)--------------------------------*/
function sprog(){
	
	
	if (valgtSprog >= sprogLength){
		valgtSprog = 1;
	} else {
		valgtSprog += 1;
	}
	
	sprogSkift();
}

function sprogSkift(){
	console.log("Sprog Loadet")
	
	var abenVindu = window.location.pathname;
	var denneSide = abenVindu.split("/").pop();
	
	/*----------------------------(Menu)--------------------------------*/
	document.getElementById("sprogText").innerHTML = alleSprog[valgtSprog-1];
	document.getElementById("hKnap").innerHTML = menuHjem[valgtSprog-1];
	document.getElementById("iKnap").innerHTML = menuInfo[valgtSprog-1];
	document.getElementById("oKnap").innerHTML = menuOm[valgtSprog-1];
	document.getElementById("kKnap").innerHTML = menuKon[valgtSprog-1];
	
	/*----------------------------(Kontakt side)--------------------------------*/
	if (denneSide == "kontakt.html"){
		document.getElementById("kontaktTittel").innerHTML = contaktTittle[valgtSprog-1];
		document.getElementById("introKontakt").innerHTML = contaktIntro[valgtSprog-1];
	}
	
	/*----------------------------(VerdensMål side)--------------------------------*/
	if (denneSide == "verdensmal.html"){
		document.getElementById("verdensMalTittel").innerHTML = verdensTittle[valgtSprog-1];
		document.getElementById("vMIntro").innerHTML = verdensIntro[valgtSprog-1];
		document.getElementById("vM6Text").innerHTML = verdens6[valgtSprog-1];
		document.getElementById("vM7Text").innerHTML = verdens7[valgtSprog-1];
		document.getElementById("vM11Text").innerHTML = verdens11[valgtSprog-1];
		document.getElementById("vM12Text").innerHTML = verdens12[valgtSprog-1];
		document.getElementById("vM13Text").innerHTML = verdens13[valgtSprog-1];
		document.getElementById("vM14Text").innerHTML = verdens14[valgtSprog-1];
		document.getElementById("vM15Text").innerHTML = verdens15[valgtSprog-1];
		document.getElementById("vMMore").innerHTML = verdensMore[valgtSprog-1];
	}
	
	/*----------------------------(Om Os side)--------------------------------*/
	if (denneSide == "omos.html"){
		document.getElementById("omOsP1").innerHTML = omP1[valgtSprog-1];
		document.getElementById("omOsP2").innerHTML = omP2[valgtSprog-1];
		document.getElementById("omOsP3").innerHTML = omP3[valgtSprog-1];
	}
	
	/*----------------------------(Info side)--------------------------------*/
	
}




