"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsuage } from '../(context)/TotalUsage';
import { UpdateCreditUsage } from '../(context)/UpdateCreditUsage';


function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [totalUsage, setTotalUsage]= useState<Number>(0);
    const [updatecreditUsage, setupdatecreditusage]=useState<any>(0);
  return (
    <TotalUsuage.Provider value={{totalUsage, setTotalUsage}}>
      <UpdateCreditUsage.Provider value={{updatecreditUsage, setupdatecreditusage}}>
        <div className=' bg-slate-100 h-screen'>
            <div className='md:w-64 hidden md:block fixed'>
                <SideNav></SideNav>
            </div>
            <div className='md:ml-64'>
              <Header/>
            {children}
            </div>
        </div>
      </UpdateCreditUsage.Provider>
    </TotalUsuage.Provider>
  )
}

export default layout