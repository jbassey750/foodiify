console.log('testing!');

let products = []

const items = ['cake', 'milk', 'eggs', 'honey', 'fish'];
const objItems = new Array({
    name: 'Cake',
    id: 1,
    price: '7',
    rating: 4.5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food'
})

const itembar = document.querySelector('.itembar');

// object elements
const objectProject = document.querySelector('.objectProject')

items.forEach(item => {
    // Create a new list item for each item in the array
    const listItem = document.createElement('li');

    // Create a button element for each item
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item;

    button.addEventListener('click', () => {

        products.push(button.textContent);
        products = [...new Set(products)]

        console.log(products);

    })

    // Append the button to the list item
    listItem.appendChild(button);

    // Append the list item to the itembar
    // itembar.appendChild(listItem);

    // Optionally, you can push the created button element to the 'products' array
});

const removeDupliacte = (arrayObj, propertyName) => {
    const newvalue = new Set()
    return arrayObj.filter(obj => {
        const value = obj[propertyName]
        // console.log(value);
        
        if (!newvalue.has(value)) {
            newvalue.add(value)
            return true
        }

        return false
    })
}

const result = removeDupliacte(objItems, 'name')
// console.log(result);




// adding obejct into html element
objItems.forEach(objItem => {
    // console.log('name: ' + objItem.name);
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const paragraph = document.createElement('p')
    const division = document.createElement('div');
    const listObj = document.createElement('li')

    span1.className = 'status'
    span2.className = 'status'
    span3.className = 'status'

    division.className = 'submain'


    paragraph.textContent = objItem.name
    paragraph.className = 'product-name'

    span1.textContent = `Price: ${objItem.price} `
    span2.textContent = `Rating: ${objItem.rating} `
    span3.textContent = `Categoty: ${objItem.category} `
    

    //append the paragraph to listObj
    division.appendChild(paragraph)

    //append the span to listObj
    division.appendChild(span1)
    division.appendChild(span2)
    division.appendChild(span3)


    listObj.appendChild(division)

    //append the listObj to objectProject
    objectProject.appendChild(listObj)
    
}
)

const divs = document.querySelectorAll('.submain')

for (const [index, div] of divs.entries() ) {
    div.addEventListener('click', () => {
        // console.log(index);
    
        products.push(objItems[index])
        // console.log(products);
        console.log(products.length);
        div.className = 'disabled'
    
        document.querySelector('.product-pick').style.cssText = `background-color: #fbc606;
        color: #fdfdfd;
        border-radius: 4px;
        padding: 2px 2px
        `
        document.querySelector('.product-pick').textContent = products.length   
        

})
}



const now = new Date();
const year = now.getFullYear();

const data = document.querySelector('.datetime').textContent = `Copyright ${year} `