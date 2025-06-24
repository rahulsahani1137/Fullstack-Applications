import React from 'react'
import loader from "@/assets/loader.gif"
import Image from 'next/image'

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <Image src={loader} alt="Loading..." height={32} width={32} />
        </div>
    )
}

export default LoadingPage