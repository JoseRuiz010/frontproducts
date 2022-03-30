export const typeFetch={
    urlProducts:{url:'http://localhost:3000/products', metodo:'GET'},
    urlPostLogin:{url:'http://localhost:3000/auth/singUp', metodo:'POST'},
    urlMyProducts:{url:'http://localhost:3000/products/productByUser/', metodo:'GET'}
}

export const armarUrl=(id)=>{
   return {url:'http://localhost:3000/products/productByUser/'+id, metodo:'GET'}
}