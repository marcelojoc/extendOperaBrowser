


chrome.browserAction.setBadgeBackgroundColor({
	color: '#2980b9'
});
chrome.browserAction.setBadgeText({
	text: 'nasheeee'
});


// acciones de pagina

// function checkURL(tabID, changeInfo, tab){
// 	// If it satisfies the criteria (the URL containing 'www.opera.com')
//     console.log(tab);
// 	// if (false) {
// 	// 	// Shows the page action
// 	// 	//chrome.pageAction.show(tabID);
// 	// }else{

//          alert('HOLA  ESTAS  VISITANDO '+ tab.url);
//     // }
// }
// chrome.tabs.onUpdated.addListener(checkURL);

// accion de navegador cuando hago click en el boton de la extencion
// chrome.browserAction.onClicked.addListener(function() {
// 	chrome.tabs.create({
// 		'url': 'https://www.opera.com'
// 	});
// });

/**
 * Este metodo tabs.query  me permite hacer  una consulta en la tab seleccionada y si esta activa
 * esto devuelve un callback  que es la funcion que se genera despues
 */

// chrome.browserAction.onClicked.addListener(function() {
// 	chrome.tabs.query({
// 		currentWindow: true,
// 		active: true
// 	}, function(tab) {
// 		chrome.tabs.create({
// 			'url': 'http://wave.webaim.org/report?url=' + tab[0].url
// 		});
// 	});
// });


//cuando hago click en el boton crea una nueva ventana de incognito  y abre el array de enlaces que hay

// var url_list = [
// 	'https://www.opera.com',
// 	'http://www.wikipedia.org',
// 	'http://www.google.com'
// ];

// chrome.browserAction.onClicked.addListener(function() {
// 	chrome.windows.create({
// 		'url': url_list,
// 		'incognito': true
// 	});
// });



chrome.contextMenus.create({
	title: 'Look up: %s',
	contexts: ['selection'],
	onclick: searchText
});

function searchText(info){
	var myQuery = encodeURI("https://www.google.com/search?q="+info.selectionText);
			chrome.tabs.create({url: myQuery});
}