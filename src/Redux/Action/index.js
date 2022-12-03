// for add item to cart:-

export const addProduct=(product)=>{
    return {
        type: "ADDCART",
        payload: product
    }
}

// for delete item from cart:-

export const deleteProduct=(product)=>{
    return {
        type: "DELETECART",
        payload: product
    }
}