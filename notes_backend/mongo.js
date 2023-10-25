const mongoose = require('mongoose')

const uri = 
`mongodb+srv://fullstack:${password}@cluster0.wsjgyo4.mongodb.net/noteApp?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(uri)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

 const note = new Note({
    content: 'HTML is easy',
    important: true,
})
Note.find({}).then(result =>{
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})


