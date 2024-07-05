const urlLogoBuerchen = "https://cdn.prod.website-files.com/64639c50efb7008417607903/650473a0d6fc5f212d1d5f44_buerchen-logo-p-500.jpg";

const urlLogoBrigerbad = "https://cdn.prod.website-files.com/64639c50efb7008417607903/64f7748b0cd59ebcc8d4e321_ballenfuehrer-logo.png";

const iconTrommel = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcaeef02f2ba28cb419_trommel.svg";

const iconPfeife = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bca2f09f3e46b875429_pfeife.svg";

const iconMajor = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcb0af4eff7206a338f_major.svg";

const iconFahne = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bcaded09e104d37e918_fahne.svg";

const iconEhrendame = "https://uploads-ssl.webflow.com/667b33c870758265fedc2ff5/66803bca058fac246c7c5f91_eherndame.svg";

document.getElementById('btn-register').addEventListener('click', function() {

  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let mail = document.getElementById('mail').value;

  if(firstname === ""){
    //Das Vornamefeld ist leer
    //alert("Das Vornamefeld ist leer");
    let inputField = document.getElementById('firstname');
    inputField.classList.add('empty');
    let messageEmptyfield = document.getElementById('firstname-message');
    messageEmptyfield.classList.remove('hidden');
  }
  else{
    let inputField = document.getElementById('firstname');
    inputField.classList.remove('empty');
    let messageEmptyfield = document.getElementById('firstname-message');
    messageEmptyfield.classList.add('hidden');

    if(lastname === ""){
      //Das Nachnamefeld ist leer
      //alert("Das Nachnamefeld ist leer");
      let inputField = document.getElementById('lastname');
      inputField.classList.add('empty');
      let messageEmptyfield = document.getElementById('lastname-message');
      messageEmptyfield.classList.remove('hidden');
    }
    else{
      let inputField = document.getElementById('lastname');
      inputField.classList.remove('empty');
      let messageEmptyfield = document.getElementById('lastname-message');
      messageEmptyfield.classList.add('hidden');

      if(mail === "" || mail.search('@') === -1 ){
        //Das Mailfeld ist leer oder falsch
        //alert("Das Mailfeld ist leer");
        let inputField = document.getElementById('mail');
        inputField.classList.add('empty');
        let messageEmptyfield = document.getElementById('mail-message');
        messageEmptyfield.classList.remove('hidden');
      }
      else{

        let inputField = document.getElementById('mail');
        inputField.classList.remove('empty');
        let messageEmptyfield = document.getElementById('mail-message');
        messageEmptyfield.classList.add('hidden');

        let radioA = document.getElementById('club-first').checked;
        let radioB = document.getElementById('club-second').checked;
        if(radioA || radioB){
          /* Personalien einfüllen */
          document.getElementById('input-field-goal-firstname').innerText = firstname;
          document.getElementById('input-field-goal-lastname').innerText = lastname;
          document.getElementById('input-field-goal-mail').innerText = mail;

          /* Verein einfüllen */
          if (document.getElementById('club-first').checked) {
            let registerclub = document.querySelector('label[for="club-first"]').innerText;
            document.getElementById('field-goal-club-name-radio').innerText = registerclub;
            let backgroundImageClub = document.querySelector('.logo-club-block');
            backgroundImageClub.style.backgroundImage = 'url(' + urlLogoBuerchen + ')';
          }
          if (document.getElementById('club-second').checked) {
            let registerclub = document.querySelector('label[for="club-second"]').innerText;
            document.getElementById('field-goal-club-name-radio').innerText = registerclub;
            let backgroundImageClub = document.querySelector('.logo-club-block');
            backgroundImageClub.style.backgroundImage = 'url(' + urlLogoBrigerbad + ')';
          }

          /* Instrument einfüllen */
          let instrument = document.getElementById('field-instrument');
          let selectedinstrument = instrument.options[instrument.selectedIndex].text;
          document.getElementById('instrument-input-field-goal').innerText = selectedinstrument;

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
        else{
          //Radiobuttons sind nicht ausgewählt
          alert("Radiobuttons sind nicht ausgewählt");
        }

      }
    }
  }



});



/*
Aufgabe Zeno:
Sobald auf den "Neues Mitglied erfassen" gedrückt wird, soll:
- Der Vorname und Nachname im Bereich "Persönliches" hineingeschrieben werden
- Ein Bild der Fahne des Betreffenden Vereins im Bereich "Verein" angezeigt werden
- Ein Bild des betreffenden Instrumentes im Bereich "Instrument" angezeigt werden

Spezielles:
Wenn ein Feld nicht ausgefüllt wurde, soll:
Billigvariante: Per Alert eine Fehlermeldung erscheinen
Bessere Variante: In einem neuen Bereich eine Fehlermeldung erscheinen
Luxus-Variante: Eine Fehlermeldung unter dem falsch ausgefühlten Feld erscheinen und das Feld soll rot eingefärbt sein
Bei allen Varianten soll sich in den unteren drei Resultsbereichen nichts ändern

Wichtig: Es dürfen weitere änderungen am DOM (HTML) vorgenommen werden, z.B. neue IDs, zusätzliche Tags etc.

Freiwillig: Den bums schöner gestalten

Wichtige resource:
https://javascript.info/

*/
