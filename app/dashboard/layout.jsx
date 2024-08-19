import { SignedIn } from '@clerk/nextjs'
import React from 'react'
import Sidebar from './_components/Sidebar'

function layout({children}) {
  return (
    <SignedIn>
    <div>
        <div className='md:w-64 fixed  '>
        <Sidebar/>
        </div>
        <div className='md:ml-64'>
        {children}
        </div>
        
      
       
        
    
    </div>
    </SignedIn>
  )
}

export default layout