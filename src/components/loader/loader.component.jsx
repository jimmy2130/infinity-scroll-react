import React from 'react';
import './loader.styles.css';
import loader from '../../assets/loader.svg';

export const Loader = () => {
  return(
    <div className="loader">
      <img src={loader} alt="Loading" />
    </div>
  )
}