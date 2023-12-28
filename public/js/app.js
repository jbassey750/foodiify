console.log('testing!');

let products = []

const objItems = new Array({
    name: 'Cake',
    id: 1,
    price: '7',
    rating: 4.5,
    category: 'food',
    image: '../public/image/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.webp',
},{
    name: 'Ice cream',
    id: 2,
    price: '10',
    rating: 5,
    category: 'food',
    image: '../public/image/ice-cream.jpg'
})

const itembar = document.querySelector('.itembar');

// object elements
const objectProject = document.querySelector('.objectProject')



// console.log(result);

// adding obejct into html element
objItems.forEach(objItem => {
    // console.log('name: ' + objItem.name);
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const paragraph = document.createElement('p')
    const links = document.createElement('a')
    const division = document.createElement('div');
    const listObj = document.createElement('li')

    span1.className = 'status'
    span2.className = 'status'
    span3.className = 'status'

    links.className = 'links'

    division.className = 'submain'

    paragraph.className = 'product-name'

    paragraph.textContent = objItem.name
    links.href = `${objItem.name}/food-api`
   

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


    links.appendChild(division)

    listObj.appendChild(links)

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
        // listObj.className = 'active'
    
        document.querySelector('.counter').style.cssText = `background-color: #fbc606;
        color: #fdfdfd;
        border-radius: 4px;
        padding: 2px 2px
        `
        document.querySelector('.counter').textContent = products.length   
        

})
}


fetch('http://localhost:3000/food-api')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log('Could not fetch data'))



const now = new Date();
const year = now.getFullYear();

const data = document.querySelector('.datetime').textContent = `Copyright ${year} `