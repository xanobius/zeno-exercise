# Zenos Ablieferung

## Visual
- Shit's not responsive
- Kein Label: Wenn ein Formularfeld ausgefüllt ist, weiss man nicht mehr, was man einfüllen sollte. Weniger Problematisch in diesem Fall, aber bei grösseren Formularen tödlich. AUCH in diesem Fall, Problem wegen Accessibility

## Problems

Trotz type=email wird das feld nicht validiert. Warum?
Standart-Validierung der E-Mail durch den Browser ist deaktiviert, da sich die Felder gar nicht in einem Formular befinden.


## Was ist momentan gut

Der Hinweis zu Fehlern markiert direkt das Eingabefeld und erscheint visuell hervorgehoben

## Was Stört momentan

- Ich weiss zwar WAS falsch (welche Eingabe) ist, aber nicht WAS (muss ausgefüllt sein? Soll 5 Buchstaben enthalten? Muss eine E-Mailadresse sein?...) 
- Radiobuttons haben andere Fehlermeldung (alerts) als die anderen inputs (error icon + border)
- Instrument hat gar keine Fehlerrückmeldung
- Fehlermeldungen erscheinen einzeln: Man muss sich schritt für schritt durch den scheiss kämpfen (-> ux / techinsch)
- Beim Ausfüllen des Formulars habe ich keine Ahnung welche Felder obligatorisch und welche fakultativ sind (-> visuell)
- Wenn ein Feld mal mit Fehler markiert ist, ich dieses korrigiere, ein Feld DAVOR jedoch einen fehler hat, bleibt das Feld als falsch markiert: bsp.- Vorname ausfüllen, Nachname leerlassen KLICK (nachname markiert), Vorname löschen, Nachname ausfüllen KLICK (bei de fehler als falsch markiert, obwohl Nachname richtig ist).


## Wunschzenario: 
- [ ] Wenn ich das Formular sehe, weiss ich genau, was ich auszufüllen habe und vor allem was ich ausfüllen MUSS.
- [ ] Wenn ich etwas falsch ausgefüllt habe, möchte ich direkt über ALLE Fehler informiert werden.
- [ ] Ich möchte bei Fehlern genau wissen, WAS falsch gemacht wurde, bzw. was erwartet wird.


## Lösungsansätze / Brainstorm

Könnten wir es so machen, dass wir so wie jetzt, den Zustand (nicht gut) zuerst in eine Variable speichern und dann das nächste kontrolliert wird und am schluss dann anhand der Variable die Fehler angezeigt werden?



