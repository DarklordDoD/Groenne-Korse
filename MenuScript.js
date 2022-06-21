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
const menuHjem = ["Virksomheden","Company",];
const menuInfo = ["Verdensmål","Goals",];
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

/*----------------------------(Info side)--------------------------------*/

const infoTittel = ["Hvad laver vi","What are we doing"]

const infoP1 = ["Det materiale som vi udvinder og genbruger kan komme mange steder fra. Alt fra gamle dåser til store fabriksmaskiner, som over tid er blevet for slidte. Man kan endda finde affald begravet under jorden, som førhen kunne have været blevet brugt til noget, som en skrue fra en traktor, som den tabte midt i høsten","The materials that we extract and recycle comes from many places. Everything from old aluminum cans to big factory machinery, which over time has stopped being functional. We even find waste buried underground, which has been used in the past, like a screw from a tractor, that it dropped during a harvest."];

const infoP2 = ["Affaldet bliver sorteret før genanvendelse. Det gør man ved hjælp af roterende magneter, som er for enden af nogle ¨samlebånd¨. Der er kun nogle metaller som har magnetiske egenskaber. Disse er primært jern, nikkel og stål.","The materials that we extract and recycle comes from many places. Everything from old aluminum cans to big factory machinery, which over time has stopped being functional. We even find waste buried underground, which has been used in the past, like a screw from a tractor, that it dropped during a harvest."];

const infoP3 = ["Derefter kommer affaldet igennem et shredder-anlæg. Som navnet antyder, er det en maskine som hakker affaldet i mindre stykker. Efter en sidste sortering hvor affaldet bliver opdelt efter materiale, bliver affaldet smeltet om, og derved har man nu rent råt materiale, som kan få nyt liv gennem genanvendelse.","After sortation, the waste is put through a shredder plant. As the name suggests, this is where the waste is cut down into smaller pieces. After that, the waste is sorted depending on what material they are made of. Now the materials from the waste can be melted down, and be given new life through recycling."];

const infoTittel2 = ["Tips til genbrug / bæredygtighed I hjemmet:","Tips for recycling / sustainability in the home:"]

const info2P1 = ["Vi gør os umage med at få genbrugt så meget affald som muligt, men hvis vores planet skal blive renere, må vi alle gøre en indsats. Derfor har vi samlet nogle tips til jer derhjemme, til hvordan jeres hverdag kan blive mere miljøvenlig.","We make a great effort to recycle as much waste as we can, but if we are to make our planet cleaner, we must all do our part. That is why we have collected some tips for you at home, to make your everyday life more environmentally friendly."];

const info2P2 = ["Det mest bæredygtige forbrug er det forbrug, som slet ikke finder sted. Når du er ude og handle efter dagligdagsvarer er det derfor en god idé at overveje hvorvidt man har brug for det man putter i kurven. Begræns dig selv til kun at handle ind til det, som I i jeres husstand kan nå at forbruge, før det bliver dårligt.","The most sustainable consumption is the consumption that does not take place at all. When you are out shopping for groceries, it is therefore a good idea to consider what you put in your basket. Limit yourself to shopping only what you in your household can consume before the food goes bad."];

const info2P3 = ["Når du er ude og handle er det også en god idé at købe økologiske fødevarer. På den måde slipper du som udgangspunkt for, at der er rester sprøjtemidler i din mad. Det er ikke kun frugt og grønt som blive produceret uden sprøjtemidler. Det samme gælder de planter, som bruges til foder for økologisk opdrættede dyr. Det er kun ganske få tilsætningsstoffer som er tilladte i økologiske fødevarer. Det betyder at du kan være med til mindske belastningen af naturen, fremme bedre dyrevelfærd og reducere dit og din families indtag af sprøjtemiddelrester.","When you are out shopping it is also a good idea to buy organic foods. That way you essentially avoid any pesticide residues in your food. It is not only fruits and vegetable that are produced without pesticides. The same goes for plants used for fodder for organically reared animals. There are only a few additives that are allowed in organic foods. This means that you can help reduce the burden on nature, promote better animal welfare and reduce yours and your family’s intake of pesticide residues."];

const info2P4 = ["Dertil er det også en god idé at vælge miljømærkede forbrugsvarer. Uanset hvilket produkt du vælger, kan du være sikker på, at hvis det er svanemærket eller har EU-blomsten på sig, så er produktet blandt de miljømæssigt bedste i deres kategori. Det kan du fordi de stiller høje krav til produkterne, og derfor bliver produkterne nøje fulgt, for at være sikker på, at processen skåner miljøet så meget som muligt.","In addition, it is also a good idea to choose eco-labeled consumer goods. Whichever product you choose, you can be sure that if it is Nordic Eco-labeled or has the EU-flower on it, the product is among the environmentally best in their category. This is because they place high demands for the products, and therefore they monitor the product through the whole process, to ensure that the environment isn’t hurt."];

const info2P5 = ["Når du er ude og handle vil vi også anbefale at kigge efter Fairtrade-mærket. Fairtrade er en international mærkningsordning, som arbejder for at bønder og arbejdere i nogle af verdens fattigste lande kan få en mere fair indtægt, og bedre arbejdsvilkår.","When you are out shopping, we also recommend looking for the Fairtrade mark. Fairtrade is an international organization, that works to ensure that farmers and workers in some of the world’s poorest countries can have a fairer income and better working conditions."];

const info2P6 = ["Du kan også skåne miljøet og din pengepung, ved at købe ting brugt. Det kunne f.eks. være møbler, cykler, bøger og tøj. Gå til din nærmeste genbrugsbutik og kig dig omkring. Alternativt kan du også selv donere det du ikke længere kan bruge, som tøj du eller dine børn er vokset ud af, eller gammelt legetøj som ellers bare ligger og samler støv. Du kan også lave opslag på din lokale Facebook-side, hvor du kan sætte dine ting op til fri afhentning, hvis du gerne vil undgå at tage turen ned til en genbrugsforretning eller en station.","You can also save the environment - and a lot of money – by buying things used. It could, for example, be furniture, bicycles, books or clothes. Go to your nearest thrift store and have a look around. Alternatively, you can also donate what you no longer use, such as clothes that you or your children have outgrown, or old toys that otherwise just lie and collect dust. You can also make a post on your local Facebook-page, where you put your things up for free pickup, if you would like to avoid a trip down to the thrift store or station."];

const info2P7 = ["Du kan beholde krukker og flasker af glas, og bruge dem igen til at holde på noget andet. De kan blandt andet bruges til syltetøj/marmelade, hyldeblomstsaft eller stearinlys. Man kan også bruge dem som potter til planter, skulle man mangle nogle af dem.","You can keep jars and bottles of glass and use them again to hold something else. They can be used to store jam/marmalade, elderflower juice candles, among other things. They can also be used as pots for plants, should you need some."];

const info2P8 = ["Udover alle disse tips vil vi anbefale at følge den lokale affaldssortering som er opsat af din kommune. Sørg for at det skrald du har som du ikke kan genbruge kommer i de rigtige affaldscontainere, så det nemmere kan blive bearbejdet ude på affaldscentrerne.","In addition to all these tips, we would recommend following the local waste sorting set up by your municipality. Make sure that waste that you cannot recycle gets into the right waste containers, so that it can be more easily processed at the waste centers."];

/*----------------------------(Roter mellem sprogene)--------------------------------*/
function sprog(){
	
	
	if (valgtSprog >= sprogLength){
		valgtSprog = 1;
	} else {
		valgtSprog += 1;
	}
	
	sprogSkift();
}

function sprogSkift(){
	
	var abenVindu = window.location.pathname;
	var denneSide = abenVindu.split("/").pop();
	console.log(denneSide);
	
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
	if (denneSide == "info.html"){
		document.getElementById("infoTittel").innerHTML = infoTittel[valgtSprog-1];
		document.getElementById("infoP1").innerHTML = infoP1[valgtSprog-1];
		document.getElementById("infoP2").innerHTML = infoP2[valgtSprog-1];
		document.getElementById("infoP3").innerHTML = infoP3[valgtSprog-1];
		document.getElementById("infoP3").innerHTML = infoP3[valgtSprog-1];
		document.getElementById("infoTittel2").innerHTML = infoTittel2[valgtSprog-1];
		document.getElementById("info2P1").innerHTML = info2P1[valgtSprog-1];
		document.getElementById("info2P2").innerHTML = info2P2[valgtSprog-1];
		document.getElementById("info2P3").innerHTML = info2P3[valgtSprog-1];
		document.getElementById("info2P4").innerHTML = info2P4[valgtSprog-1];
		document.getElementById("info2P5").innerHTML = info2P5[valgtSprog-1];
		document.getElementById("info2P6").innerHTML = info2P6[valgtSprog-1];
		document.getElementById("info2P7").innerHTML = info2P7[valgtSprog-1];
		document.getElementById("info2P8").innerHTML = info2P8[valgtSprog-1];
	}
}




