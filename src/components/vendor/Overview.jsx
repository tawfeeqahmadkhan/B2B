import React from 'react'

export default function Overview() {
  return (
    <div>
        <div className='flex items-center flex-wrap flex-row justify-center gap-[20px] my-10'>
            <div className='h-[20rem] w-[20rem] bg-red-300 flex items-center  justify-center flex-col shadow-md '>
             sales
            </div>
            <div className='h-[20rem] w-[20rem] bg-red-300 flex items-center  justify-center flex-col  shadow-md'>
             Products
            </div>
        </div>
        <h1 className=' font-bold text-lg flex items-center justify-center'>Live Trades</h1>
        <div className='flex items-center  border-t-2 justify-center h-[20rem]'>
            <h1 className=' font-bold text-lg flex items-center '>......</h1>
        </div>
    </div>
  )
}
