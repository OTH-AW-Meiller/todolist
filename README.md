# To-Do-Liste

Dies ist eine einfache To-Do-Liste, die mit HTML, CSS und JavaScript erstellt wurde. Die Anwendung ermöglicht es Benutzern, Aufgaben hinzuzufügen, abzuhaken (als erledigt zu markieren), zu löschen und den Status der Aufgaben im Browser zu speichern.

## Projektstruktur

Das Projekt besteht aus den folgenden Dateien:

- **index.html**: Die Haupt-HTML-Datei, die die Struktur der To-Do-Liste definiert.
- **style.css**: Die CSS-Datei, die das Styling der To-Do-Liste enthält.
- **script.js**: Die JavaScript-Datei, die die Funktionalität der To-Do-Liste implementiert.

## Funktionen

1. **Aufgaben hinzufügen**:
   - Benutzer können eine neue Aufgabe über das Eingabefeld hinzufügen.
   - Die Aufgabe wird in der Liste angezeigt, wenn der Benutzer die Eingabetaste drückt oder den "Hinzufügen"-Button klickt.

2. **Aufgaben als erledigt markieren**:
   - Jede Aufgabe hat eine Checkbox, mit der sie als erledigt markiert werden kann.
   - Erledigte Aufgaben werden durchgestrichen und in grauer Farbe dargestellt.

3. **Aufgaben löschen**:
   - Jede Aufgabe hat einen Lösch-Button (❌), mit dem sie aus der Liste entfernt werden kann.

4. **Speichern im Local Storage**:
   - Die Aufgabenliste wird im Local Storage des Browsers gespeichert.
   - Beim Neuladen der Seite werden die gespeicherten Aufgaben automatisch geladen und angezeigt.

5. **Duplikate verhindern**:
   - Beim Hinzufügen einer neuen Aufgabe wird überprüft, ob diese bereits existiert. Falls ja, wird eine Warnung angezeigt.

## Codeübersicht

### HTML (`index.html`)

- Definiert die Struktur der To-Do-Liste, einschließlich eines Eingabefelds, eines Buttons und einer Liste.
- Verknüpft die CSS- und JavaScript-Dateien.

### CSS (`style.css`)

- Stellt sicher, dass die To-Do-Liste optisch ansprechend ist.
- Zentriert den Inhalt, definiert Stile für die Liste, Buttons und abgeschlossene Aufgaben.

### JavaScript (`script.js`)

- **DOM-Elemente abrufen**: Die wichtigsten Elemente wie Eingabefeld, Button und Liste werden aus dem DOM abgerufen.
- **Aufgaben speichern**: Die Aufgaben werden im Local Storage gespeichert, um sie auch nach einem Seiten-Reload verfügbar zu machen.
- **Aufgaben rendern**: Neue Aufgaben werden dynamisch in die Liste eingefügt.
- **Event-Listener**: Interaktionen wie das Hinzufügen, Markieren und Löschen von Aufgaben werden über Event-Listener gesteuert.

## Nutzung

1. Öffne die Datei `index.html` in einem Browser.
2. Gib eine neue Aufgabe in das Eingabefeld ein und drücke die Eingabetaste oder klicke auf den "Hinzufügen"-Button.
3. Markiere Aufgaben als erledigt, indem du die Checkbox anklickst.
4. Lösche Aufgaben mit dem ❌-Button.
5. Lade die Seite neu, um zu sehen, dass die Aufgaben gespeichert bleiben.

## Vorschau

![To-Do-Liste Vorschau](https://oth-aw-meiller.github.io/todolist/)

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe die [LICENSE](LICENSE)-Datei für weitere Informationen.