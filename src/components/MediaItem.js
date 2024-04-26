// function mediaItems(){
//     return(
//     )
// }

// const mediaItems= [
//     {title= "title"},
//     {type= "type"}
// ]

// function addToCart(){
//     return(
//         <btn>Add to Cart</btn>
//     )
// }

import React from "react";

const MediaItem = ({item, addToCart, RemoveFromCart}) => { // <-- the props we are using
    return(
        <div>
            <h3>{item.title}</h3>
            <p>Media Type: {item.type}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button> event of the onclick it will add to item to the cart
            <button onClick= {()=> RemoveFromCart(item)}>Remove from Cart</button>
        </div>
    )
}


export default MediaItem;