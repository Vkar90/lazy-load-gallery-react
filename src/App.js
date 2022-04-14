import React, { useEffect, useState } from 'react'
import {fetchImages} from './utils/fetchImages'
import LazyImage from './components/LazyImage'


function App ()  {
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    fetchImages().then((images) => setImageList(images))
  }, [])
  
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
            />
        ))}
      </div>
    </div>
  )
}

export default App