//Tentando resolver como usar essa função
/* async function loadLangJSON() {
	try {
		const response = await fetch("language/langs.json");
		return response;
	} catch(err) {
		console.error(`Error loading JSON: ${err}`);
	}
} */

const mainContainerId="main-container";
const defaultLang = "de";

const altSecondaryContent = `<h2>Mehr Informationen</h2>
<p>Ich lege viel Wert auf Qualität und arbeite mit dem 4-Augen-Prinzip, d.h. die 
Übersetzungen werden immer von eine/r qualifizierte/m Lektor/in überprüft.
Eine reibungslose, transparente Kommunikation mit dem Kunden ist mir äußerst wichtig.</p>
<p>Ich habe Erfahrung mit sehr diversen Aufträgen und Kunden, die von Privatpersonen bis
große Agenturen über mittelständige Unternehmen reichen. Ich bin immer dazu bereit, dem 
Kunden entgegenzukommen und eine befriedigende Lösung zu finden.</p>
<p>Ich arbeite mit den neuesten Übersetzungsprogrammen, die mir ermöglichen, auch in sehr
langfristige Projekte immer die Einheitlichkeit in der Sprachnutzung zu bewahren.</p>`

const languages = {
	"de" : 
{ 
    "title-section": `
	<h1>Beglaubigte Übersetzungen</h1>
	<h2>Deutsch &lrarr; Portugiesisch in Leipzig</h2>`,

    "list-skills": `<ul>
	<li>Staatlich geprüfter und beeidigter Übersetzer mit <strong>über 10 Jahren Erfahrung</strong>        in verschiedenen Bereichen.</li>       <li>Zusammenarbeit mit zahlreichen Übersetzungsagenturen.</li>
	<li>Beglaubigte Übersetzung von <strong>Urkunden, Verträgen</strong> u.a.</li>
	<li>Schnell und zuverlässig mit Sitz in <strong>Leipzig-Lindenau</strong>.</li>
	</ul>`,
	"contact": "Jetzt anfragen",
	"name": "Name:",
	"email": "E-Mail:",
	"message": "Nachricht:",
	"submit": "Absenden",
	"secondary-content": `
	<hr />
	<h2>Mehr über mich</h2>
	<ul>
	<li>Brasilianischer Muttersprachler</li>
	<li>Staatlich geprüfter Übersetzer für Portugiesisch (Hessische lehrkräfteakademie) seit 2015</li>
	<li>Öffentlich bestellt und allgemein beeidigt vom Oberlandesgericht Dresden</li>
	<li>Master in Interkultureller Kommunikation an der Europa-Universität Viadrina</li>
	<li>Post-Graduate Certificate in Translation an der University of Portsmouth</li>`
},
"pt" : 
{ 
    "title-section": "      <h1>Traduções juramentadas</h1>      <h2>Alemão &lrarr; Português em Leipzig</h2>",
    "list-skills": " <ul>        <li>Tradutor juramentado com           <strong>mais de 10 anos de experiência</strong>         em várias áreas.</li>       <li>Colaboração com diversas agências de tradução.</li>       <li>Tradução juramentada de <strong>certificados, certidões e contratos, </strong> entre outros.</li>       <li>Trabalho rápido e confiável em <strong>Leipzig-Lindenau</strong>.</li>     </ul>",
	"contact": "Contato",
	"name": "Nome:",
	"email": "E-mail:",
	"message": "Mensagem:",
	"submit": "Enviar",
	"secondary-content": ""
}
};

//Setting default language in localStorage
localStorage.setItem('language', defaultLang);

//Function to change language str in local storage
function setLanguage(lang) {
localStorage.setItem('language', lang);
populateLang();
}

let test = document.getElementById("main-container");
console.log(test);
document.getElementById("main-container").lang="pt-BR";
console.log(test);

/*Accesses language str in local storage, populates HTML with 
the language using the data in `languages`.*/
function populateLang(){
	/*Helper function, checks if NodeList[index] is in `languages` with 
	currently set language key, if yes changes innerHTML of the element.*/
	function changeElmntLang(obj, index) {
		let idElmt = obj[index].id;
		if (idElmt in languages[localStorage.language]) {
			document.getElementById(idElmt).innerHTML = languages[localStorage.language][idElmt];
		}
	};
	// Setting content language to localStorage.language
	let test = document.getElementById(mainContainerId).lang=localStorage.language;
	//Selecting all id elements and changing innerHTML using helper function above.
	let idElmts = document.querySelectorAll('*[id]');
	Object.keys(idElmts).map(
	x => {changeElmntLang(idElmts, x)});
}

setLanguage(defaultLang);