let productsDB= [
    {
        id:1,
        title:'Milky Bilky',
        price:20,
        imageUr:'images/drink1.jpg',
        qty:1
    },
    {
        id:2,
        title:'Blue Stuff',
        price:30,
        imageUr:'images/drink2.jpg',
        qty:1
    },
    {
        id:3,
        title:'For Her',
        price:15,
        imageUr:'images/drink3.jpg',
        qty:1
    },
    {
        id:4,
        title:'Flaming Red',
        price:25,
        imageUr:'images/drink4.jpg',
        qty:1
    },
    {
        id:5,
        title:'Softy Pink',
        price:20,
        imageUr:'images/drink5.jpg',
        qty:1
    },
    {
        id:6,
        title:'Ice Tea',
        price:10,
        imageUr:'images/drink6.jpg',
        qty:1
    }
];

localStorage.setItem("products",JSON.stringify(productsDB))