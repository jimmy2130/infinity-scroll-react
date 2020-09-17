import React from 'react';
import './App.css';
import { ImageContainer } from './components/image-container/image-container.component';
import { ScrollToTopButton } from './components/scroll-to-top-button/scroll-to-top-button.component';

const App = () => {
  return(
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <ImageContainer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App;
