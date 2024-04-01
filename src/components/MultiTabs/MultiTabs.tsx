import React, { useState } from 'react'

type props= {
     topNav: string[];
     components: React.ReactNode[];
     onComplete: ()=> void;
     onCancel: () => void;
}
const MultiTabs:React.FC<props> = ({
     topNav,
     components,
     onComplete,
     onCancel,
}) => {
     const [currentTab, setCurrentTab] = useState(0)
     return (
          
          <div className = "multitabs h-full w-3/4 p-4 flex-col justify-center items-center relative rounded-2xl bg-card border border-gray-400" >
               <div className='close flex justify-center items-center absolute top-0 right-0 h-6 w-6 p-1 rounded-1/2'>
                    X
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
                    {components[currentTab]}
               </div>
               <div className='action-buttons flex justify-end items-center gap-5'>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent 
                    shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:text-background  hover:bg-indigo-700 focus:outline-none ">
                         Back
                    </button>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none  ">
                         Next
                    </button>
               </div>
          </div>
     )
}

export default MultiTabs;
