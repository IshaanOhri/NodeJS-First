const utils = require('./utils')
const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
const request = require('request')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// console.log(utils.add(2,3))

// console.log(utils.getNotes())
// console.log(validator.isEmail("gmail@yahoo.com"))

// console.log(chalk.red.bold("Hey, I'm Ishaan", "I am in VIT"))


// yargs.command({
//     command : "add",
//     describe : "This is to add",
//     builder : {
//         title : {
//             describe : 'This is title',
//             demandOption : true,
//             type : 'string'
//         },
//         body : {
//             describe : 'This is body',
//             demandOption : true,
//             type : 'string'
//         }
//     },
//     handler : function(argv){
//         console.log("Adding", argv.title)
//         notes.addNote(argv.title, argv.body)
//     }

// })

// yargs.parse()

// const f = (x) => x*2

// console.log(f(2))

// const obj = {
//     name : 'ishaan',
//     age : 20,
//     list : ['Name 1', 'Name 2'],
//     f(){
//         this.list.forEach((each) => {
//             console.log(each)
//         })
//         console.log('Age',this.name)
//     }
// }
// obj.f()

// const c = {
//     name : 'ishaan',
//     age : 20,
//     college : 'VIT'
// }

// const c_string = JSON.stringify(c)
// console.log(c.name)
// console.log(c_string.name)

// const c_JSON = JSON.parse(c_string)
// console.log(c_JSON.name)

// const dataByte = fs.readFileSync('test.json')
// const data = dataByte.toString()
// const dataJSON = JSON.parse(data)
// console.log(dataJSON)

// const r = [1,2,3,4,5,6]

// const r2 = r.filter(function (note){
//     return note % 2 === 0
// })

// console.log(r2)

// const url = 'https://hackgrid-events-app.herokuapp.com/getFAQ'

// request({ url, json : true },(error,response) => {
//     console.log(response.body)
// })

// console.log("done")

// const getData = (url, callback) => {
//     request({url , json : true}, (error, response) => {
//         callback(response.body)
//     })
// }

// getData(url,(output) => {
//     console.log(output)
// })

// const details = {
//     firstName : 'Ishaan',
//     lastName : 'Ohri',
//     age : 20,
//     college : 'VIT'
// }

// const print = ({firstName : name, middleName = 'null', lastName, age}) => {
//     console.log(name, middleName, lastName, age)
// }

// print(details)

app.get('', (req, res) => {
    res.send('<h1>Hello there</h1>')
})

app.get('/about', (req, res) => {
    const obj = {
        name : 'Ishaan',
        age : 20
    }
    res.send(obj)
})

app.get('/help', (req, res) => {
    console.log(req.query.name)
    const obj = {
        name : req.query.name,
        age : req.query.age
    }
    res.send(obj)
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})