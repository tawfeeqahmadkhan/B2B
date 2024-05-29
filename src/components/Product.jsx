import React, { useState } from 'react'
import img  from "../../public/product.png";
import { MdCancel } from "react-icons/md";
export default function Product() {
    const [showmodel,setShowmodel] = useState(false)
    return (
        <div >
         {showmodel? <div className=' w-[100%] h-[90vh]  z-[0] flex items-center justify-center relative z-[10]'>
         <div className='flex items-center justify-center h-[35rem] lg:h-[20rem] lg:w-[35rem] sm:w-[10rem] lg:flex-row flex-col cursor-pointer bg-white  shadow-2xl cursor-pointer hover:scale-[1.05]  gap-[10px] relative z-[1000]' >
         <div>
            <div className='absolute  flex top-0 right-0 text-4xl' onClick={()=>setShowmodel(false)}>

            <MdCancel  />
            </div>
         <img src={img} alt='product image h-[15rem] w-[15rem]' />
         </div>
        <div className='flex flex-col gap-[10px] px-10 lg:px-0'>
        <h1 className='font-bold'>Product Name</h1>
         <p>₹120</p>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quidem repellendus! Ex omnis eaque ea voluptatem aspernatur assumenda debitis aliquid.</h1>
         <div className='flex flex-row gap-[50px]'>
            <button className='bg-indigo-500 text-white font-bold p-2 hover:bg-indigo-400'> BUY NOW</button>
            <button className='bg-indigo-500 text-white font-bold p-2 hover:bg-indigo-400'>SCHEDULE</button>
         </div>
        </div>
       
     </div>
        </div>:<div className='flex flex-wrap flex-row'>
       
       {[1,2,3,3,4,5,5,5,5,].map((item,index)=>(
         <div className='flex items-center justify-center h-[20rem] w-[15rem] flex-col cursor-pointer bg-gray-300 m-2 shadow-md cursor-pointer hover:scale-[1.05]' key={index} onClick={()=>{setShowmodel(true)}}>
         <div>
         <img src={img} alt='product image h-[15rem] w-[15rem]' />
         </div>
         <h1 className='font-bold'>Product Name</h1>
         <p>₹120</p>
       
     </div>
       ))}
      
    </div>}
        
        
        </div>
    )
}
