"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { FileClock, Home, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import TrackUsage from './TrackUsage';
import Link from 'next/link';


function SideNav() {

  const menuList=[
    {
      name:'Home',
      icon:Home,
      path:'/dashboard'
    },
    // {
    //   name:'History',
    //   icon:FileClock,
    //   path:'/dashboard/history'
    // },
    // {
    //   name:'Billing',
    //   icon:Home,
    //   path:'/dashboard/billing'
    // },
    {
      name:'Settings',
      icon:Settings,
      path:'/dashboard/settings'
    },
  ]

  const path=usePathname();
  useEffect(()=>{},[]) 

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'><Image src={'/logo.svg'} alt='logo' width={120} height={50} /></div>
      <hr className='my-6 border'></hr>

      <div className='mt-3'>
        {menuList.map((menu,index)=>(
          <Link href={menu.path}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-blue-700 hover:text-white rounded-lg cursor-pointer
            ${path==menu.path && 'bg-blue-700 text-white'}`}>
                <menu.icon/>
                <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <TrackUsage/>
      </div>
    </div>
  )
}

export default SideNav