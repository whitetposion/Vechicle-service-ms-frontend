import {MutableRefObject, useEffect, useState} from 'react'

type props = [ boolean, ()=>void ]
const useToggle = (ref: MutableRefObject<any>, outsideClick = true):props => {
     const [visible, toggle] = useState(false)
     useEffect(()=>{
          function handleClick(e:MouseEvent){
               if(!visible) return
               if(!(
                    ref &&
                    ref.current &&
                    ref.current.contains(e.target) &&
                    outsideClick
               )) toggle(false)
          }
          document.addEventListener("click", handleClick)
          return document.removeEventListener("click", handleClick)
     })
     function toggable (){
          if(visible) toggle(false)
          else toggle(true)
     }
     return [visible, toggable]

}

export default useToggle
