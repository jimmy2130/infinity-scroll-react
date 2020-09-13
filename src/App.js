import React from 'react';
import './App.css';
import { ImageContainer } from './components/image-container/image-container.component';

const App = () => {
  return(
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <ImageContainer/>
    </div>
  )
}

export default App;
