
const form = document.querySelector("#form")
const noteInput = document.querySelector("#noteInput")
const noteSubmit = document.querySelector("#noteSubmit")
const noteList = document.querySelector("#notes")
const deleteAll = document.querySelector(".buttonDelete")

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
    note.innerHTML = `<span>☛</span> ${ text} <button onclick = "deleteNote(this)" class = "deletesBtn">🗑️</button> `
    noteList.appendChild(note)
}

const deleteNote = (button) => {
    let deleteThisNote = button.parentNode
    const index = storage.indexOf(deleteThisNote)
    storage.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(storage))
    deleteThisNote.remove()
}


deleteAll.onclick = (e) => {
    e.preventDefault()
    storage = []
    localStorage.setItem('notes', JSON.stringify(storage))
    noteList.innerHTML = ''

}

