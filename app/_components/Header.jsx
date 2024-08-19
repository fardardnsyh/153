"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser, } from '@clerk/nextjs'
import { ArrowLeftRight, ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

  const {user,isSignedIn}= useUser();


  
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href="/">
              <Image
                src='/logo.svg'
                width={50}
                height={40}
                alt="Logo"
                className='cursor-pointer'
              />
            </Link>
          </div>
          <nav className='hidden md:block'>
            <ul className='flex space-x-8'>
              <li><Link href="/" className='text-gray-700 hover:text-white  hover:scale-105 hover:bg-primary  hover:rounded-lg hover:p-2  transition-all'>Home</Link></li>
              <li><Link href="/how-it-works" className='text-gray-700 hover:text-white hover:scale-105 hover:bg-primary hover:rounded-lg hover:p-2  transition-all'>How it Works</Link></li>
              <li><Link href="/upgrade" className='text-gray-700 hover:text-white hover:scale-105 hover:bg-primary hover:rounded-lg hover:p-2  transition-all'>Upgrade</Link></li>
            </ul>
          </nav>
          {isSignedIn?
          <Link href={'/dashboard'}>
          <div className='flex gap-5 items-center justify-center'>
            <Button varient="outline">Dashboard</Button>
            <UserButton/>
          </div>
          </Link> :
          <SignInButton>
             <div>
          <Button className="bg-primary hover:bg-primary-dark transition">
          <div className='flex items-center gap-2'>
          <p>
            Get Started
            </p>
            <ArrowRightCircle/>
          </div>
           
          </Button>
        </div>
          </SignInButton>
         

        }
          
        </div>
      </div>
    </header>
  )
}

export default Header