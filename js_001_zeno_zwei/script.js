
const urlLogoBuerchen = "https://cdn.prod.website-files.com/64639c50efb7008417607903/650473a0d6fc5f212d1d5f44_buerchen-logo-p-500.jpg";
const urlLogoBrigerbad = "https://cdn.prod.website-files.com/64639c50efb7008417607903/64f7748b0cd59ebcc8d4e321_ballenfuehrer-logo.png";
const iconTrommel = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcaeef02f2ba28cb419_trommel.svg";
const iconPfeife = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bca2f09f3e46b875429_pfeife.svg";
const iconMajor = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcb0af4eff7206a338f_major.svg";
const iconFahne = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcaded09e104d37e918_fahne.svg";
const iconEhrendame = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bca058fac246c7c5f91_eherndame.svg";
let club = "mal lüäge was passiert";

const newMember = {
  firstname: '',
  lastname: '',
  mail: '',
  club: '',
  instrument: ''
}

//Funktion wenn eingabefeld leer
function handleEmptyField(inputId, messageId) {
  // Element des Eingabefelds holen
  let inputField = document.getElementById(inputId);
  // Klasse 'empty' zum Eingabefeld hinzufügen
  inputField.classList.add('empty');
  
  // Nachrichtenelement holen
  let messageEmptyfield = document.getElementById(messageId);
  // Klasse 'hidden' vom Nachrichtenelement entfernen
  messageEmptyfield.classList.remove('hidden');
}


//Funktion wenn eingabefeld ausgefüllt
function handlefilledField(inputId, messageId) {
  // Element des Eingabefelds holen
  let inputField = document.getElementById(inputId);
  // Klasse 'empty' Eingabefeld einfernen
  inputField.classList.remove('empty');
  // Nachrichtenelement holen
  let messageEmptyfield = document.getElementById(messageId);
  // Klasse 'hidden' zum Nachrichtenelement himzufügen
  messageEmptyfield.classList.add('hidden');
}


document.getElementById('btn-register').addEventListener('click', function() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const mail = document.getElementById('mail').value;

  newMember.firstname = document.getElementById('firstname').value;
  newMember.lastname = document.getElementById('lastname').value;
  newMember.mail =  document.getElementById('mail').value;

  // Error list leeren und verbergen
  const errorList = [];
  const listContainer = document.getElementById('error-list');
  listContainer.innerHTML = '';
  let errorWrapper = document.getElementById('error-list-wrapper');
  errorWrapper.classList.add('hidden');

  // Kontrolle Vorname
  if(firstname === ""){
    //Das Vornamefeld ist leer
    //alert("Das Vornamefeld ist leer");
    handleEmptyField('firstname', 'firstname-message');
    errorList.push('gib en Vornamu a')
  }
  else {
    handlefilledField('firstname', 'firstname-message')
  }

  // Kontrolle Nachname
  if(lastname === ""){
    //Das Nachnamefeld ist leer
    //alert("Das Nachnamefeld ist leer");

    handleEmptyField('lastname', 'lastname-message');

    errorList.push('gib en Nachnamu a')
  }
  else {
    handlefilledField('lastname', 'lastname-message')
  }

  if(mail === "" || mail.search('@') === -1 ){
    //Das Mailfeld ist leer oder falsch
    //alert("Das Mailfeld ist leer");
    handleEmptyField('mail', 'mail-message');
   
    errorList.push('gib en gültigi Email Adräss a')
  }
  else {
    handlefilledField('mail', 'mail-message')
  }

  const radioA = document.getElementById('club-first').checked;
  const radioB = document.getElementById('club-second').checked;

  if(! (radioA || radioB) ) {
    //Radiobuttons sind nicht ausgewählt
    let messageEmptyfield = document.getElementById('club-message');
    messageEmptyfield.classList.remove('hidden');
    errorList.push('Wähl en Verei üs')
  }else{
    let messageEmptyfield = document.getElementById('club-message');
    messageEmptyfield.classList.add('hidden');
  }

  // Fehlerkontrolle Instrument
  const instrumentField = document.getElementById('field-instrument');
  if(instrumentField.value === ''){
    let messageEmptyfield = document.getElementById('instrument-message');
    messageEmptyfield.classList.remove('hidden');
    errorList.push('Wähl es \'strumänt üs')
    // show error thingy
  }else{
    let messageEmptyfield = document.getElementById('instrument-message');
    messageEmptyfield.classList.add('hidden');
    // hide error thingy
  }


  // Abfüllen der Inhalte in die Card "Erfasstes Mitglied"
  // NUR wenn keine Fehler passiert sind
  // if(thereAreErrors) { // legacy variante
  if(errorList.length !== 0){ // Wenn ein Fehler notiert ist, ist das Formular nicht gültig ausgefüllt worden.
    // Zeige dem Noob seine Mängel auf
    let errorWrapper = document.getElementById('error-list-wrapper');
    errorWrapper.classList.remove('hidden');
    // Loop über alle Elemente von "errorList"
    // Für jedes Element in errorList soll ein <li> erstellt werden
    // Der Text von dem li Tag soll dem inhalt des Elementes von errorList entsprechen

    // For Schleife
    // Drei Parameter
    //  for([VOR DEM ERSTEN DURCHGANG]; [VOR JEDEM DURCHGANG: KONTROLLE]; [NACH JEDEM DURCHGANG]) { [AUFGABE] }
    // Beispiel, ausgehend von 2 elementen in arr (= arr.length)
    //  for (let i = 0 ; i < arr.length; i++) { }
    // Bevor die schleife ausgeführt wird, passiert [VOR DEM ERSTEN DURCHGANG]
    // -> die Variable i wird angelegt und auf 0 gesetzt
    // Vor jedem Schleifendurchgang, findet die Kontrolle statt. WENN die Kontrolle erfolgreich ist, wird AUFGABE einmal ausgeführt
    // -> 0 ist beim ersten mal 0, arr.legnth ist 2, das heisst i ist kleiner als 4 -> AUFGABE ausführen
    // Nach Beendung von AUFGABE wird [NACH JEDEM DURCHGANG] ausgeführt.
    // -> i wird um 1 inkrementiert, i ist nun 1
    // Danach findet direkt wieder die Kontrolle statt: i ist nun 1 und damit immernoch kleiner als 2 -> AUFGABE ausführen
    // Nach Beendung von AUFGABE wird [NACH JEDEM DURCHGANG] ausgeführt.
    // -> i wird um 1 inkrementiert, i ist nun 2
    // Danach findet direkt wieder die Kontrolle statt: i ist nun 2 und damit NICHT MEHR kleiner als 2 -> Schleife fertig. Weiter im restlichen Code

    for(let i = 0; i < errorList.length; i++){
      // <li> erstellen
      const newListItem = document.createElement('li');
      // text des Elementes von errorList in <li> eintragen
      newListItem.innerText = errorList[i];
      // WICHTIG: <li> dem container (<ul>) anhängen!
      listContainer.append(newListItem);
    }
    console.log(errorList)
  }else{
    /* Vorname, Nachname und Email einfüllen */
    document.getElementById('input-field-goal-firstname').innerText = firstname;
    document.getElementById('input-field-goal-lastname').innerText = lastname;
    document.getElementById('input-field-goal-mail').innerText = mail;

   

    /* Verein einfüllen */
    if (document.getElementById('club-first').checked) {
      let registerclub = document.querySelector('span[for="club-first"]').innerText;
      document.getElementById('field-goal-club-name-radio').innerText = registerclub;
      let backgroundImageClub = document.querySelector('.logo-club-block');
      backgroundImageClub.style.backgroundImage = 'url(' + urlLogoBuerchen + ')';
      club = registerclub;
      newMember.club = registerclub;
    }

    if (document.getElementById('club-second').checked) {
      let registerclub = document.querySelector('span[for="club-second"]').innerText;
      document.getElementById('field-goal-club-name-radio').innerText = registerclub;
      let backgroundImageClub = document.querySelector('.logo-club-block');
      backgroundImageClub.style.backgroundImage = 'url(' + urlLogoBrigerbad + ')';
      club = registerclub;
      newMember.club = registerclub;
    }



    /* Instrument einfüllen */
    let instrument = document.getElementById('field-instrument');
    let selectedinstrument = instrument.options[instrument.selectedIndex].text;
    document.getElementById('instrument-input-field-goal').innerText = selectedinstrument;
    newMember.instrument = selectedinstrument;

    if(selectedinstrument === "Pfeife"){
      let backgroundImageInstrument = document.querySelector('.icon-instrument-goal');
      backgroundImageInstrument.style.backgroundImage = 'url(' + iconPfeife + ')';
    }
    if(selectedinstrument === "Trommel"){
      let backgroundImageInstrument = document.querySelector('.icon-instrument-goal');
      backgroundImageInstrument.style.backgroundImage = 'url(' + iconTrommel + ')';
    }
    if(selectedinstrument === "Major"){
      let backgroundImageInstrument = document.querySelector('.icon-instrument-goal');
      backgroundImageInstrument.style.backgroundImage = 'url(' + iconMajor + ')';
    }
    if(selectedinstrument === "Ehrendame"){
      let backgroundImageInstrument = document.querySelector('.icon-instrument-goal');
      backgroundImageInstrument.style.backgroundImage = 'url(' + iconEhrendame + ')';
    }
    if(selectedinstrument === "Fahne"){
      let backgroundImageInstrument = document.querySelector('.icon-instrument-goal');
      backgroundImageInstrument.style.backgroundImage = 'url(' + iconFahne + ')';
    }


  }
});

document.getElementById('btn-save').addEventListener('click', function() {
  //gespeicherte variabeln in das grid schreiben
  let firstnameRegisterDiv = document.createElement('div');
  firstnameRegisterDiv.innerText = newMember.firstname;
  let firstnamecontainer = document.getElementById('gridlist');
  firstnamecontainer.appendChild(firstnameRegisterDiv);

  let lastnameRegisterDiv = document.createElement('div');
  lastnameRegisterDiv.innerText = newMember.lastname;
  let lastnamecontainer = document.getElementById('gridlist');
  lastnamecontainer.appendChild(lastnameRegisterDiv);

  let mailRegisterDiv = document.createElement('div');
  mailRegisterDiv.innerText = newMember.mail;
  let mailcontainer = document.getElementById('gridlist');
  mailcontainer.appendChild(mailRegisterDiv);

  let clubRegisterDiv = document.createElement('div');
  clubRegisterDiv.innerText = newMember.club;
  let clubcontainer = document.getElementById('gridlist');
  clubcontainer.appendChild(clubRegisterDiv);

  let instrumentRegisterDiv = document.createElement('div');
  instrumentRegisterDiv.innerText = newMember.instrument;
  let instrumentcontainer = document.getElementById('gridlist');
  instrumentcontainer.appendChild(instrumentRegisterDiv);

  setTimeout(() => {
    let selectedinstrument = "";
    let club = "";
    let mail = "";
    let lastname = "";
    let firstname = "";
    let registerclub = "";
    document.getElementById('input-field-goal-firstname').innerText = firstname;
    document.getElementById('input-field-goal-lastname').innerText = lastname;
    document.getElementById('input-field-goal-mail').innerText = mail;
    document.getElementById('instrument-input-field-goal').innerText = selectedinstrument;
    document.getElementById('field-goal-club-name-radio').innerText = registerclub;

    }, 
    10
  );
});


/*
Aufgabe Zeno, 2024-07-05:
- Labels korrigieren, damit diese immer ersichtlich sind
- Visuell anzeigen, wenn Felder obligatorisch sind

Coding:
- Versuche gleiche code-stellen in funktionen auszulagern, welche dann aufgerufen werden.
z.B.

```
  let messageEmptyfield = document.getElementById('instrument-message');
  messageEmptyfield.classList.remove('hidden');
```
kommt zigmal vor, dabei ändert sich nur die ID. könnte der Parameter sein.

Bei den Fehlern haben wir gesehen, wie man HTML elemente neu erstellen kann.
Für jede gültige Formular-Einsendung eine neue Card "Erfasstes Mitglieg" zu erstellen,
so dass bei 5 erfassten mitgliedern alle diese neben/ untereinander angezeigt werden.


Wichtige resource:
https://javascript.info/

*/
