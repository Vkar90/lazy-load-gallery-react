import { useEffect, useState } from "react"

export const useObserver = (ref, options) => {
    const { rootMargin, threshold } = options
    const [observerEntry, setObserverEntry] = useState(null)
    useEffect(() => {
        if(!ref?.current) return
        const observer = new IntersectionObserver(([entry]) => {
             // console.log(entry)
             setObserverEntry(entry)
             if(entry.isIntersecting){
               observer.unobserve(entry.target) //we don't want to trigger the page load again if we scroll back up
             }
        },{ rootMargin, threshold })

        observer.observe(ref.current)
      }, [ref, rootMargin, threshold])

      return observerEntry
}