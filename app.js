console.log('testing!');

let products = []

const items = ['cake', 'milk', 'eggs', 'honey', 'fish'];
const objItems = new Array({
    name: 'Cake',
    id: 1,
    price: '7',
    rating: 4.5,
    category: 'food',
    image: './image/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.webp',
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food',
    image: './image/ice-cream.jpg'
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
    // division.style.backgroundImage = objItem.productImage.src
    console.log(objItem);


    paragraph.textContent = objItem.name
    paragraph.className = 'product-name'

    span1.textContent = `Price: ${objItem.price} `
    span2.textContent = `Rating: ${objItem.rating} `
    span3.textContent = `Categoty: ${objItem.category} `

    listObj.style.cssText = `background-image: url('./${objItem.image}');
    background-repeat: no-repeat; 
    background-attachment: fixed;
    background-position: left;
    background-size: cover;`
    

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
        console.log(products);
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