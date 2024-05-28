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
  return (
    <>
   <Navber/>
   <div className='flex align-center w-[100%] justify-between'>
    <div className='bg-[#121621]  w-[20%]'>
    <div>
        <div className='flex items-center py-[3rem] gap-[1rem]  flex-col fixed  h-[100vh] bg-[#121621] text-white w-[20%]  '>
           {sideNavberList.map((item,index)=>(
             <div className=' flex gap-[4px] items-center cursor-pointer hover:bg-black p-4 flex-start w-[10rem]' onClick={()=>setShowComponent(item.title)} key={index} > <span className='text-white'>{item.icon}</span>{item.title}</div>
           ))}
           
        </div>
    </div>
    </div>
    <div className='bg-white w-[80%]  '>
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
