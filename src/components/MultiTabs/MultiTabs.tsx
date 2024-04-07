import { CircleX } from 'lucide-react';
import React, { useRef, useState } from 'react'

interface RefProps {
     executeFunction: () => void;
}
type props= {
     topNav: string[];
     components: React.ElementType[];
     onComplete: ()=> void;
     onCancel: () => void;
}
const MultiTabs:React.FC<props> = ({
     topNav,
     components,
}) => {
     const [currentTab, setCurrentTab] = useState(0)
     const childRef = useRef<RefProps>(null)
     const Component = components[currentTab]
     return (
          
          <div className = "multitabs h-full w-3/4 p-4 flex-col justify-center items-center relative rounded-2xl bg-card border border-gray-400" >
               <div className='close flex justify-center items-center absolute top-0 right-0 h-12 w-12 text-red-500'>
                    <CircleX size={30}/>
               </div>
               <div className='tabs-liner relative w-full h-10 flex gap-5 p-2 justify-start items-center '>
                    {topNav.map((item, index)=>(
                         <div 
                              className={`
                                   h-full flex items-center justify-center rounded-md p-2 font-semibold cursor-pointer
                                   text-[foreground]
                                   ${index === currentTab ? "bg-[#7D51FE] text-[background] " : ""}
                                   `}
                              onClick= {()=>setCurrentTab(index)}
                         >
                              {item}
                         </div>
                    ))}
               </div>
               <div className='tab relative p-4 flex justify-start'>
                    <Component ref= {childRef}/>
               </div>
               <div className='action-buttons flex justify-end items-center gap-5'>
                    <button 
                         name='save'
                         onClick={()=> childRef.current?.executeFunction()}
                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:text-background  hover:bg-indigo-700 focus:outline-none "
                    >
                         Back
                    </button>
                    <button
                         name='next'
                         onClick={()=> childRef.current?.executeFunction()}
                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none  ">
                         Next
                    </button>
               </div>
          </div>
     )
}

export default MultiTabs;
