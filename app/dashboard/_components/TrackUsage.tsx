"use client"
import { TotalUsuage } from '@/app/(context)/TotalUsage';
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage';
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'

interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt:string
}

function TrackUsage() {
    
    const {user}= useUser();
    const {totalUsage, setTotalUsage}=useContext(TotalUsuage);
    const {updatecreditUsage, setupdatecreditusage}=useContext(UpdateCreditUsage);
   
    useEffect(()=>{
        user&&GetData();
    },[user]);


    useEffect(()=>{
        user&&GetData();
    },[updatecreditUsage&&user]);

    const GetData = async (): Promise<void> => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const email = user.primaryEmailAddress.emailAddress;
                const result = await db
                    .select()
                    .from(AIOutput)
                    .where(eq(AIOutput.createdBy, email)) as HISTORY[];
                
                GetTotalUsage(result);
            } else {
                console.warn('User email address is not defined');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length)
        });
        
        setTotalUsage(total)
    }
  return (
    <div className='m-5'>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-red-400 w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full' 
                style={{
                    width:(totalUsage/5000)*100+"%"
                }}>

                </div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/5000 Credits Used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3'>Upgrade</Button>
    </div>
  )
}

export default TrackUsage