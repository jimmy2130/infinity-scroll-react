import React, { useState, useEffect } from 'react';
import './image-container.styles.css';
import { Image } from '../image/image.component';
import { Loader } from '../loader/loader.component';

export const ImageContainer = () => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
      setIsFetching(true);
      console.log('fire')
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);



  function fetchMoreListItems() {
    const count = 10;
    const apiKey = 'aH6p-5TWQve12HUUx9QgSMCkq9Vh-Ht5xG532WFykuM';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        const addedImage = res.map(item => {
          return {
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.alt_description,
          }
        })
        setListItems(prevState => (prevState.concat(addedImage)/*[...prevState, ...addedImage]*/))
        setIsFetching(false);
        //props.setIsFetching(false);
      })
      .catch(err => console.log(err));
  }

  return(
    isFetching ? (<Loader/>) : (
      <div className="image-container">
        {listItems.map((item, index) => (
          <Image key={index} item={item}/>
        ))}
      </div>
    )
  )
}