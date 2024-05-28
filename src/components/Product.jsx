import React from 'react'
import img  from "../../public/product.png"
export default function Product() {
    return (
        <div className='flex flex-wrap flex-row'>
           {[1,2,3,3,4,5,5,5,5,].map((item,index)=>(
             <div className='flex items-center justify-center h-[20rem] w-[15rem] flex-col cursor-pointer bg-gray-300 m-2 shadow-md cursor-pointer hover:scale-[1.05]' key={index}>
             <div>
             <img src={img} alt='product image h-[15rem] w-[15rem]' />
             </div>
             <h1>Items</h1>
             <p>₹120</p>

         </div>
           ))}
        </div>
    )
}
