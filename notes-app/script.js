const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from localStorage
function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        createNoteElement(note);
    });
}

// Function to create a note element
function createNoteElement(content = '') {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.innerHTML = content;
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    inputBox.addEventListener("input", updateStorage); // Add input event listener for new notes
}

// Function to update localStorage
function updateStorage() {
    let notes = [];
    document.querySelectorAll(".input-box").forEach(note => {
        let noteContent = note.innerHTML.replace(/<img[^>]*>/g, '');
        notes.push(noteContent);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Event listener for creating new notes
createBtn.addEventListener("click", () => {
    createNoteElement();
    updateStorage();
});

// Event listener for deleting notes
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event listener to prevent default behavior for Enter key
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes(); // Display notes on page load
