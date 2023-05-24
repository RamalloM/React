const Products = [
  { nombre: "Jean", precio: 20000, idItem: "1", img: "../img/jean.jpg", idCat: '2'},
  { nombre: "Remera", precio: 9000, idItem: "2", img: "../img/remera.jpg", idCat: "3"},
  { nombre: "Buso", precio: 15000, idItem: "3", img: "../img/buso.jpg", idCat: "4"},
  { nombre: "Sueter", precio: 14000, idItem: "4", img: "../img/sueter.jpg", idCat: "4"},
  { nombre: "Chino", precio: 18000, idItem: "5", img: "../img/chino.jpg", idCat: "2"},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products)
    }, 200)
  })
}


export const getOneProduct = (idItem) =>{
  return new Promise (resolve => {
      setTimeout(() => {
        const product = Products.find(prod => prod.idItem === idItem);
        resolve(product);
      }, 2)
  })
}

export const getProductsByCategory = (idCategory) =>{
  return new Promise (resolve =>{
    setTimeout (() => {
        const productCategory =  Products.filter(prod => prod.idCat === idCategory);
        resolve(productCategory);
    }, 200)
  })
}