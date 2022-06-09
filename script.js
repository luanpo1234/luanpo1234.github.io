const defaultLang = "de";
const languages = {"de" : 
{ 
    "title-section": "      <h1>Beglaubigte Übersetzungen</h1>     <h2>Deutsch &lrarr; Portugiesisch in Leipzig</h2>",
    "list-skills": " <ul>        <li>Staatlich geprüfter und beeidigter Übersetzer mit           <strong>über 10 Jahre Erfahrung</strong>        in verschiedenen Bereichen.</li>       <li>Zusammenarbeit mit zahlreichen Übersetzungsagenturen.</li>       <li>Beglaubigte Übersetzung von <strong>Urkunden, Verträgen</strong> u.a.</li>       <li>Schnell und zuverlässig mit Sitz in <strong>Leipzig-Lindenau</strong>.</li>     </ul>"
},
"pt" : { 
    "title-section": "      <h1>Traduções juramentadas</h1>      <h2>Alemão &lrarr; Português em Leipzig</h2>",
    "list-skills": " <ul>        <li>Tradutor juramentado com           <strong>mais de 10 anos de experiência</strong>         em várias áreas.</li>       <li>Colaboração com diversas agências de tradução.</li>       <li>Tradução juramentada de <strong>certificados, certidões e contratos, </strong> entre outros.</li>       <li>Trabalho rápido e confiável em <strong>Leipzig-Lindenau</strong>.</li>     </ul>"
}
};

//Setting default language in localStorage
localStorage.setItem('language', defaultLang);

//Function to change language str in local storage
function setLanguage(lang) {
localStorage.setItem('language', lang);
populateLang();
}

//Accesses language str in local storage, populates HTML with the language using the data in `languages`.
function populateLang(){
	//Helper function, checks if NodeList[index] is in `languages` with currently set language key, if yes changes innerHTML of the element.
	function changeElmntLang(obj, index) {
		let idElmt = obj[index].id;
		if (idElmt in languages[localStorage.language]) {
			document.getElementById(idElmt).innerHTML = languages[localStorage.language][idElmt];
		}
	};
	//Selecting all id elements and changing innerHTML using helper function above.
	let idElmts = document.querySelectorAll('*[id]');
	Object.keys(idElmts).map(
	x => {changeElmntLang(idElmts, x)});
}
