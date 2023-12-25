const XLSX = require('xlsx')
const fs = require('fs')

const workbook = XLSX.readFile('./data/foodiify.xlsx')
const sheetName = workbook.SheetNames[0];
const workSheet = workbook.Sheets['Stock']

const stocks = XLSX.utils.sheet_to_json(workSheet)

const result = stocks.filter(stock => {
    return stock.Category == 'Snack'
})

const jsonData = JSON.stringify(result)

const writeData =fs.writeFileSync('./data/snack.json', jsonData)

module.exports = stocks