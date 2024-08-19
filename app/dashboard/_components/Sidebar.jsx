
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LibraryBig, LineChart, MessageCircleCode, ShieldEllipsis } from 'lucide-react'
import React from 'react'

const menu = [
    {
        id:1,
        name:"Forms",
        icon:LibraryBig,
        path: '/dashboard'
    },
    {
        id:2,
        name:"Responses",
        icon:MessageCircleCode,
        path: '/dashboard/response'
    },
    
    {
        id:3,
        name:"Analytics",
        icon:LineChart,
        path: '/dashboard/analytics'
    },
    
    {
        id:4,
        name:"Upgrade",
        icon:ShieldEllipsis,
        path: '/dashboard/upgrade'
    },
    

]

function Sidebar() {
  return (
    


    <div className=' bg-secondary h-screen shadow-lg border'>
        <div className='p-4'>
            {menu.map((menu,index)=>(
                <h2 key={index} className='flex p-6 bg-gray-200 rounded-lg border shadow-lg mb-3 gap-3 cursor-pointer my-4 hover:bg-primary hover:rounded-lg hover:shadow-lg hover:scale-105 transition-all hover:text-white '>
                    {menu.name}
                    <menu.icon/>
                </h2>
            ))}
        </div>

        <div className='fixed bottom-20 flex flex-col gap-4 p-6 w-64 '>
            <Button className="w-full hover:scale-105 shadow-lg hover:shadow-lg transition-all">+ Create AI Form</Button>
            <div>
            <Progress  value={50} />
            <h2 className='mt-2 text-gray-700'> <strong>2</strong> out of <strong>4</strong> Forms Used</h2>
            <h2 className='mt-2 '>Upgrade for the Unlimited Accses</h2>
            </div>
            

        </div>
    </div>
  )
}

export default Sidebar