import React from 'react';
import './App.css';
import image from './image.jpg'
import Picture from './profile/Profile.js'
function App() {
  const handleName=(name)=>{
    alert(name)
  }
  return (
    <div>

     <Picture name="chourouk" bio="17/05/1991" professions="ing" myfunction={handleName}>
              <img src={image} alt='chourouk' />
     </Picture>


    </div>
  );
}

export default App;
