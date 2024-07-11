import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='bg-white p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='bg-white flex gap-2 items-center p-2 border rounded-md max-w-md'>
        {/* <Search/>
        <input type='text' placeholder='Search...' className='outline-none'/> */}
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-blue-700 p-3 rounded-full text-xs text-white'>Join Membership for just $2.99</h2>
          <UserButton/>
      </div>
    </div>
  )
}

export default Header