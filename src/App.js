import React from 'react';
import './App.css';
import mediaList from './components/mediaList.';
// import mediaItem from'./components';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';


// function App() {

//   const [media, setMedia]= React.useState('');

//   const [cartOperations, setCartOperations] = React.useState('');


//   return (
//     <div>
//       <ul>
//         {mediaList}
//       </ul>
//     </div>
//   );
// }

// export default App;

const App = () => {

  const [mediaItems] = useState([
      { "id": 1, "type": "VHS", "title": "Back to the Future" },
      { "id": 2, "type": "DVD", "title": "The Matrix" },
      { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
  ]);

  const[cart,setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); // take whats currently in the cart and add to the cart
    console.log(`Added ${item.title} into the cart.`)
  }

  const removeFromCart = (item) => {
    setCart([element.remove, item])
    console.log(`removed ${item.title} from cart`)
  }

return (
    <div>
      <h1>Welcome to our Retro Media Store!</h1>
      <mediaList mediaItems={mediaItems} addToCart={addToCart}/>
      <nav className="App">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/VHS" className="nav-item">VHS</Link>
        <Link to="/DVD" className="nav-item">DVD</Link>
        <Link to="/CD" className="nav-item">CD</Link>
      </nav>
      <Routes>
        <Route path= "/" element = {<Homepage/>} />
        <Route path= "/VHS" element = {<VHS/>} />
        <Route path= "/DVD" element = {<DVD/>} />
        <Route path= "/CD" element = {<CD/>} />
      </Routes>
    </div>
  )

}