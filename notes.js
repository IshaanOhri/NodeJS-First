const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.filter((each) => {
        return each.title === title
    })

    console.log(duplicate)

    if(duplicate.length === 0){
        const note = {
            title,
            body
        }
    
        notes.push(note)
        console.log(notes)
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    }
    else{
        console.log("Already exist")
    }

    
}

const loadNotes = () => {
    try{
        const notesBytes = fs.readFileSync('notes.json')
        const notesString = notesBytes.toString()
        const notesJSON = JSON.parse(notesString)

        return notesJSON
    }
    catch{
        return []
    }
}

module.exports = {
    addNote
}