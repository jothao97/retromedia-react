// function mediaList(){
//     const [mediaItems] = React.useState([
//     { "id": 1, "type": "VHS", "title": "Back to the Future" },
//     { "id": 2, "type": "DVD", "title": "The Matrix" },
//     { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
//   ]);

//   return (
//     <div>
//         {mediaItems.map(m=> <p>{m.id}{m.type}{m.title}</p>)}
//     </div>
//   )
// }

// export default mediaList;

// function cartAddition(){

// }

import React from "react";
import MediaItem from "./MediaItem";

const mediaList = ({mediaItems, addToCart}) => {
return(
  <div>
    {mediaItems.map(item => (
      <MediaItem key={item.id} item = {item} addToCart={addToCart}/>
    ))}
  </div>
)

}

export default mediaList;