import React, { useState } from 'react'
import SideNavber from './SideNavber'
import Overview from './Overview'
import Product from '../Product'
import Navber from '../Navber'
import { FaChartColumn,FaClone } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
export default function VendorDashboard() {
  const sideNavberList = [
    {
      title:"Overview",
      icon:<FaChartColumn />
    },
    {
      title:"Products",
      icon:<FaClone />
    },
    {
      title:"Orders",
      icon:<FaBorderAll />
    },
    {
      title:"Status",
      icon:<GrStatusGoodSmall />
    },
    {
      title:"Transactions",
      icon:<FaMoneyCheck />
    },
    {
      title:"Wallet",
      icon:< FaWallet />
    },
    {
      title:"About",
      icon:<FcAbout />
    },
    {
      title:"Help?",
      icon:<MdOutlineLiveHelp />
    },
  ]
  const [showComponent,setShowComponent] = useState("Overview")
  const [showSideBar,setShowSideBar] = useState(false)
  return (
    <>
   <Navber/>
   <div className='flex align-center w-[100%] justify-between'>
    <div className='bg-[#121621]  w-[20%] hidden lg:block'>
    <div>
        <div className=' flex items-center py-[3rem] gap-[1px]  flex-col fixed  h-[100vh] bg-[#121621] text-white w-[20%]  '>
           {sideNavberList.map((item,index)=>(
             <div className=' flex gap-[4px] items-center cursor-pointer hover:bg-black p-4 flex-start w-[10rem]' onClick={()=>setShowComponent(item.title)} key={index} > <span className='text-white'>{item.icon}</span>{item.title}</div>
           ))}
           
        </div>
    </div>
    </div>
    <div className='  lg:hidden sm:block sticky w-[2rem] h-[1rem] top-0 p-1 absolute z-[100]'>
   {!showSideBar? <FiMenu className='text-2xl ' onClick={()=>setShowSideBar(true)} />:<MdCancel  className='text-4xl mx-40 ' onClick={()=>setShowSideBar(false)}/>}
   {showSideBar? <div className=' flex items-center my-[-2rem] gap-[1px]  flex-col fixed  h-[100vh] bg-[#121621] text-white absolute '>
           {sideNavberList.map((item,index)=>(
             <div className=' flex gap-[4px] items-center cursor-pointer hover:bg-black p-4 flex-start w-[10rem]' onClick={()=>{setShowComponent(item.title) ;setShowSideBar(false)}} key={index} > <span className='text-white'>{item.icon}</span>{item.title}</div>
           ))}
           
        </div>:null}
    </div>
    <div className='bg-white lg:w-[80%] sm:w-[100%] sm:px-4 '>
    {
      showComponent=='Overview'?<Overview/>:null
    }
    {
      showComponent=='Products'?<Product/>:null
    }
    </div>
   </div> </>
  )
}
