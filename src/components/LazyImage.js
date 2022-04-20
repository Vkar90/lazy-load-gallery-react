import React, { useRef, useEffect, useState } from 'react'
import { useObserver } from '../hooks/useObserver'

const LazyImage = ({ image, isLast, nextPage }) => {
 const imageRef = useRef()
 const [imageUrl, setImageUrl] = useState('')
 const entry = useObserver(imageRef, { rootMargin:"0px", threshold:"1" })

 useEffect(() => {
   if(!entry) return
        // console.log(entry)
    if(isLast && entry.isIntersecting){
      console.log("last image is in viewport")  
      nextPage()
    }
    if(entry.isIntersecting){
      setImageUrl(entry.target.dataset.src)
    }
  }, [entry, isLast])
 
  return (
    <div style={{minHeight: 100}}>
        <img 
            ref={imageRef}
            src={imageUrl}
            data-src={`${image.download_url}.jpg`} 
            alt={image.author} 
            width="200px" 
            height="200px" 
        />
    </div>
  )
}

export default LazyImage