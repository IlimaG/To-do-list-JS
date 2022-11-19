
const form = document.querySelector("#form")
const noteInput = document.querySelector("#noteInput")
const noteSubmit = document.querySelector("#noteSubmit")
const noteList = document.querySelector("#notes")

let storage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []

form.addEventListener('submit', e => {
    e.preventDefault()
    storage.push(noteInput.value)
    localStorage.setItem('notes', JSON.stringify(storage))
    newNote(noteInput.value)
    noteInput.value = ''
})

const newNote = (text) => {
    const note = document.createElement('li')
    note.innerHTML = `${text} <button onclick = "deleteNote(this)" class = "deletesBtn">🗑️</button>`
    noteList.appendChild(note)
}

const deleteNote = (button) => {
    let deleteThisNote = button.parentNode
    const index = storage.indexOf(deleteThisNote)
    storage.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(storage))
    deleteThisNote.remove()
}