import React, { useEffect, useRef } from 'react'

import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  aiouput: string;
}

function OuputSection({aiouput}: props) {
    const editorRef:any=useRef();

    useEffect(()=>{
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiouput);
    }, [aiouput])
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='p-2 font-medium text-lg'>Your Result</h2>
            <Button className='flex gap-2'
            onClick={()=>navigator.clipboard.writeText(aiouput)}><Copy className='w-4 h-4'/>Copy</Button>
        </div>
        <Editor
            ref={editorRef}
            initialValue="your result"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OuputSection