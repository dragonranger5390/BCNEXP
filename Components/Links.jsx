import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Links() {
  return (
    <div className="container w-[70%] md:w-[40%] mx-auto pt-12 pb-4">
        <div className="flex mt-12">
            {/* <!-- ((2)) - Put your image / icon here --> */}
            <Image className='mx-auto' alt="Laufmix" src="/logo-links.png" width={180} height={180}/>
            {/* <img alt="Laufmix" className="" src="img/logo-links.png" style="height:180px; width:180px;"> */}
        </div>
        <div className="justify-center mt-4 mb-4">
            {/* <!-- ((3)) - Put your brand name or whatever you want --> */}
            <div className="text-center text-text-links pt-4 pb-12 text-lg">Многофунциональный сервис с глобальным сообществом в одном месте.</div>
        </div>
        <div className="flex flex-wrap justify-center mx-2 gap-2">


            {/* <!-- ((4)) - Buttons blocks - you can add as many -50as you want --> */}
            <Link href="/" className="inline-block border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Website
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Youtube
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Instagram
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Telegram Channel
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Telegram Chat
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Twitter
            </Link>
            <Link href="#" className="inline-block leading-normal border-2 border-solid border-transparent cursor-pointer text-center w-full max-w-full text-text-links bg-bg-links p-4 col-span-12 rounded-md font-semibold text-xl">
              Facebook
            </Link>

        </div>
        
    </div>
  )
}

export default Links