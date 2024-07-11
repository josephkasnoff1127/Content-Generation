"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OuputSection from '../_components/OuputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/aimodel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { User } from '@clerk/nextjs/server'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsuage } from '@/app/(context)/TotalUsage'
import router from 'next/router'
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage'

interface PROPS{
    params:{
        'template-slug':string
    }
}
/**
 * generate ai content
 * @param props 
 * @returns 
 */

function createNewContent(props: PROPS) {
    
    const selectedTemplate: TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
   
    const [loading, setLoading] =useState(false);
    const [aiouput, setaioutput]=useState<string>('');
    const {user} =useUser();
    const {totalUsage, setTotalUsage}=useContext(TotalUsuage);
    const {updatecreditUsage, setupdatecreditusage}=useContext(UpdateCreditUsage);
    
    if (totalUsage>=5000)
    {
        console.log('You have exceeded max credit allowed')
        router.push('./dashboard/billing')
        return;
    }

    const GenerateAIContent=async (formData:any)=>{
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const FinalAIPrompt =JSON.stringify(formData)+", "+SelectedPrompt;
        const result =await chatSession.sendMessage(FinalAIPrompt);
        setaioutput(result?.response.text());
        await saveInDB(formData, selectedTemplate?.slug, result?.response.text())
        setLoading(false);

        setupdatecreditusage(Date.now())

    }

    const saveInDB=async(formData:any, slug:any, airesp:string)=> {
        const result=await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:airesp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy')
            
        });
    }
  
    return (
    <div className='p-10'>
        <Link href={"/dashboard"}>
        <Button className='bg-blue-700'><ArrowLeft/>Back</Button>
        </Link>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
            <FormSection selectedTemplate={selectedTemplate}
            userFormInput={(v:any)=>GenerateAIContent(v)}
            loading={loading}/>
            <div className='col-span-2'>
                <OuputSection aiouput={aiouput}/>
            </div>
        </div>
    </div>
  )
} 

export default createNewContent