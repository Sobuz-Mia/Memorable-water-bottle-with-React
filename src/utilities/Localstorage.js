const getStorageCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const saveCartToLocalStorage = cart =>{
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart',stringifyCart);
}
const addToLS = id => {
    const newCart = getStorageCart();
    newCart.push(id);
    saveCartToLocalStorage(newCart);
}

export {addToLS,getStorageCart}