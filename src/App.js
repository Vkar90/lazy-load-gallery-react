import React, { useEffect, useState } from 'react'
import {fetchImages} from './utils/fetchImages'
import LazyImage from './components/LazyImage'


function App ()  {
  const [imageList, setImageList] = useState([])
  const [page, setPage] = useState(1) //state to manage next pages

  //function to get the next page  
  const nextPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    // fetchImages(page).then((images) => setImageList(images))  **use this if we don't want to infinite scroll through pages
    fetchImages(page).then((images) => setImageList(prev =>  [...prev, ...images])) //use prev as previous state and add the new images to prev state instead of overwriting it
  }, [page])
  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Image Gallery with Lazy Loading</h1>
      <h3 style={{textAlign:"center"}}>Scroll Down 👇</h3>
      <div style={{height: "80vh"}}></div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,200px)", justifyContent:"center", alignItems:"center", gap:"1rem" }}>
        {imageList.map((image, index) => (
            <LazyImage 
              key={image.id} 
              image={image} 
              isLast={index === imageList.length - 1} 
              nextPage={nextPage}
            />
        ))}
      </div>
    </div>
  )
}

export default App