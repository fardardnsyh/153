import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Create Your Forms
        <strong className="font-extrabold text-primary sm:block hover:bg-sky-600 hover:scale-105 hover:rounded-lg hover:text-white hover:p-1  cursor-pointer transition-all"> In Seconds not Hours. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Leverage your latest <span className='text-primary font-bold hover:bg-sky-600 hover:scale-105 hover:rounded-lg hover:text-white hover:p-1 hover:px-2 cursor-pointer transition-all'>AI</span> in creating the form and share it worldwide
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto hover:scale-105 transition-all "
          href="#"
        >
        <div className='flex items-center justify-center gap-2'>
        Create AI Form
        <span><ArrowRight/></span>
        </div>
          
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero