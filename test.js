let items = ['cake', 'milk', 'eggs', 'honey', 'bread', 'fish', 'fish', ];
const choose = 'spice'

// console.log(!choose.includes(items));
if (!choose.includes(items)) {
    items.push(choose)
}

items = [...new Set(items)];

const orders = items.filter(item => {
    return item
} )
// console.log(orders);

const objItems = new Array({
    name: 'cake',
    price: '7',
    rating: 4.5,
    categoty: 'food'
},{
    name: 'fish',
    price: '7',
    rating: 4.5,
    categoty: 'food'
},{
    name: 'cake',
    price: '7',
    rating: 4.5,
    categoty: 'food'
})


function removeDuplicateObjects(array, propertyName) {
    const uniqueValues = new Set();
    return array.filter(obj => {
      const value = obj[propertyName];
    //   console.log(value);
  
      // If the value is not in the set, add it and keep the object
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        return true;
      }
  
      // If the value is already in the set, filter out the object
      return false;
    });
  }
  
  // Example usage:
  const arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'John' }, // duplicate name
    { id: 4, name: 'Mike' },
  ];
  
  const newArray = removeDuplicateObjects(objItems, 'name');
//   console.log(newArray);


  function removeDuplicates() {
 
    // Create an array of objects
    books = [
        { title: "C++", author: "Bjarne" },
        { title: "Java", author: "James" },
        { title: "Python", author: "Guido" },
        { title: "Java", author: "James" },
    ];

    
    jsonObject = books.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    uniqueArray = Array.from(uniqueSet).map(JSON.parse);
 
    // console.log(uniqueArray);
}
removeDuplicates();

const unique = books.filter((obj, index) => {
    return index === books.findIndex(o => obj.title === o.title);
});
 
console.log(unique);