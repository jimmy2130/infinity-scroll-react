import React from 'react';
import './image.styles.css';

export const Image = ({ item }) => {
  const { src, alt, title } = item;
  return(
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} title={title}/>
    </a>
  )
}