const express = require('express')
const hbs = require('hbs')
// const stock = require('./xceldb')
const snacks = require('./data/snack.json')
const weblinks = require('./data/links')
const path = require('path')

const port = process.env.port || 3000

const publicPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../template/view')
const patialPath = path.join(__dirname, '../template')

const app = express()

app.use(express.static(publicPath))

app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(patialPath)

app.get('/', (req, res) => {
    res.render('index', {
        links: weblinks
    })
})

snacks.forEach(snack => {
    // console.log(snack);
    app.get(`/${snack.name}/food-api`, (req, res) => {
        res.render('product', {
            property: {
                name: snack.name,
                price: snack.price,
                rating: snack.rating,
                category: snack.category
            }
        })
    })
})

app.get('/food-api', (req, res) => {
    res.send(snacks)
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('sign-up')
})

app.get('/list', (req, res) => {
    res.render('list')
})

app.listen(port, () => {
    console.log('server listening on port ' + port);
})