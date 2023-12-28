const data = [
  {
    "name": "Cake",
    "price": 20,
    "rating": 5,
    "category": "Snack"
  },
  {
    "name": "Ice-cream",
    "price": 4,
    "rating": 4.5,
    "category": "Snack"
  },
  {
    "name": "Doughnuts ",
    "price": 2.3,
    "rating": 4.3,
    "category": "Snack"
  },
]

// console.log(data);
const databuffer = JSON.stringify(data)
const datas = JSON.parse(databuffer)
console.log(datas); 