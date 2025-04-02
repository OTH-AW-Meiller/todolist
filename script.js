// Elemente aus dem DOM abrufen
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const inputField = document.getElementById('todo-input');

// Gespeicherte To-Dos aus dem Local Storage abrufen und in umgekehrter Reihenfolge rendern
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
savedTodos.reverse().forEach(todo => renderTodoItem(todo.text, todo.completed));

// Funktion zum Speichern der aktuellen To-Do-Liste im Local Storage
function saveTodos() {
    const todos = [...document.querySelectorAll('li')].map(item => ({
        text: item.querySelector('span').innerText, // Text des To-Dos
        completed: item.classList.contains('completed') // Status (abgeschlossen oder nicht)
    }));
    localStorage.setItem('todos', JSON.stringify(todos)); // Speicherung im Local Storage
}

// Funktion zum Rendern eines einzelnen To-Do-Elements
function renderTodoItem(text, completed = false) {
    const li = document.createElement('li'); // Neues Listen-Element erstellen
    const span = document.createElement('span'); // Text-Element erstellen
    span.innerText = text; // Text setzen
    if (completed) {
        li.classList.add('completed'); // Klasse für abgeschlossene To-Dos hinzufügen
    }
    
    // Checkbox für den Status (abgeschlossen/nicht abgeschlossen)
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed'); // Klasse toggeln
        saveTodos(); // Änderungen speichern
    });

    // Button zum Löschen des To-Dos
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', () => {
        li.remove(); // Element aus der Liste entfernen
        saveTodos(); // Änderungen speichern
    });

    // Elemente in das Listen-Element einfügen
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.prepend(li); // Element an den Anfang der Liste setzen
}

// Funktion zum Hinzufügen eines neuen To-Dos
function addTodo() {
    const text = todoInput.value.trim(); // Eingabetext bereinigen
    if (text !== '') {
        // Alle <span>-Elemente in der To-Do-Liste abrufen
        const todoItems = [...todoList.querySelectorAll('li span')];

        // Überprüfen, ob ein Duplikat existiert
        let isDuplicate = false;
        for (const span of todoItems) {
            if (span.innerText === text) {
                isDuplicate = true;
                break; // Schleife abbrechen, wenn ein Duplikat gefunden wurde
            }
        }
        if (isDuplicate) {
            alert('Dieser Eintrag existiert bereits!'); // Warnung bei Duplikat
            return; // Abbrechen, wenn ein Duplikat gefunden wurde
        }

        renderTodoItem(text); // Neues To-Do rendern
        todoInput.value = ''; // Eingabefeld leeren
        saveTodos(); // Änderungen speichern
    }
}

// Event-Listener für die Eingabetaste im Eingabefeld
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo(); // To-Do hinzufügen
    }
});

// Event-Listener für den "Hinzufügen"-Button
addTodoButton.addEventListener('click', addTodo);
