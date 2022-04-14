import { useEffect, useState } from "react"

export const useObserver = (ref, options) => {
    const { rootMargin, threshold } = options
    const [observerEntry, setObserverEntry] = useState(null)
    useEffect(() => {
        if(!ref?.current) return
        const observer = new IntersectionObserver(([entry]) => {
             // console.log(entry)
             if(entry.isIntersecting){
               setObserverEntry(entry)
               console.log("last image is in viewport")
               observer.unobserve(entry.target)
             }
        },{ rootMargin, threshold })

        observer.observe(ref.current)
      }, [ref, rootMargin, threshold])

      return observerEntry
}