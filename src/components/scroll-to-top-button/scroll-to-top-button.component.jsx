import React, { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './scroll-to-top-button.styles.css';

export const ScrollToTopButton = () => {

  const [showScroll, setShowScroll] = useState(false);

  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  return(
    showScroll ? (
    <FaArrowCircleUp className="scrollTop" onClick={backToTop} />
    ) : null
  )
}