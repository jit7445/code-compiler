import React from 'react'
import AuthForm from './components/AuthForm'
import Image from 'next/image'

const Auth = () => {
  return (
  
    <div className="flex h-screen bg-gray-700 justify-around ">
    {/* Sidebar */}
    <div className="w-1/2 hidden lg:block md:block">
    <Image src="/assets/image/logocodemining.webp" alt='logo' className='h-full'  width={500}
       height={500}></Image>
    </div>
     {/* Main content */}
    <div className="w-5/6 place-items-center mt-8 sm:mt-1">
    <AuthForm />
    </div>
  </div>
  )
}

export default Auth;
