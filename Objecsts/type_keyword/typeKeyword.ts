type Product ={
    title:string,
    color:string,
    price:number,
    quantity:number,
    stockAvailable?:boolean,
    description:string
}
const product:Product ={
    title:"Polo Shirt",
    color:"blue",
    quantity:100,
    price:2000,
    stockAvailable:true,
    description:"We have recived our new shipment which is a branded polo shirts in differernt  colors with resonable price."
}
console.log(product);
console.log(product.description);

const product2:Product ={
    title:"Ideas  shirt",
    color:"skin",
    price:1500,
    quantity:1000,
    stockAvailable:true,
    description:"This is  a brand new ideas shirt"
}
console.log(product2);
