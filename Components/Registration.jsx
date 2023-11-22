import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Registration() {
  return (
    <div className="block w-[70%] md:w-[60%] xl:w-[45%] mx-auto pt-12 ">
        <div className="flex flex-wrap justify-center mt-6">
            {/* <!-- ((2)) - Put your image / icon here --> */}
            <Image alt="Laufmix" className="img-logo" src="/logo-links.png" width={200} height={200}/>
        </div>
        <div className="flex flex-wrap text-center mt-12 mb-2 justify-around">
            <Link href="#" className="inline-block text-center no-underline cursor-pointer border-[1px] border-solid border-transparent bg-gradient-to-r from-grad-blueish to-grad-greenish  p-4 mb-2 rounded-md text-xl font-bold w-full sm:w-2/3 md:w-5/12 text-white active:text--white" role="button">Вход</Link>
            <Link href="/sign-up" className="inline-block text-center no-underline cursor-pointer border-[1px] border-solid border-transparent bg-bg-registration text-tregistration p-4 mb-2 rounded-md text-xl font-bold w-full sm:w-2/3 md:w-6/12 lg:w-5/12" role="button">Регистрация</Link>
        </div>
        <div className="flex flex-wrap justify-center mx-2 gap-2">
            {/* <!-- ((4)) - Buttons blocks --> */}
            <input type="text" className="w-full mt-12 px-4 py-2 text-xl min-h-[42px] input-registration rounded-lg bg-bg-registration border-bg-registration text-tregistration placeholder:text-base" placeholder="Имя пользователя" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>

            <input type="text" className="w-full mt-12 px-4 py-2 text-xl min-h-[42px] input-registration rounded-lg bg-bg-registration border-bg-registration text-tregistration placeholder:text-base" placeholder="Email" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>

            <input type="password" className="w-full mt-12 px-4 py-2 text-xl min-h-[42px] mb-12 input-registration rounded-lg bg-bg-registration border-bg-registration text-tregistration placeholder:text-base" placeholder="Пароль" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>

            <Link href="#" className="inline-block w-full md:w-1/2 text-center no-underline cursor-pointer border-[1px] border-solid border-transparent text-white leading-6 p-3 mb-12 rounded-md text-xl font-semibold text-break bg-gradient-to-r from-grad-blueish to-grad-greenish">Зарегистроваться</Link>

            <div className="form-group form-check block pl-6 pr-3 w-full mb-2">
                <input type="checkbox" className="w-4 h-4 float-left ml-[-24px] mt-1 rounded-md" id="exampleCheck1"/>
                <label className="inline-block text-base text-white font-normal" for="exampleCheck1">
                    Я подтверждаю согласие на обработку персональных данных в соответствии с условиями <a href="#" className="text-white/50 no-underline">Политики конфиденциальности</a>, ознакомился и согласен с условиями <a href="#" className="text-white/50 no-underline">Пользовательского соглашения</a>
                </label>
            </div>
            <div className="form-group form-check block pl-6 pr-3 w-full mb-12">
            <input type="checkbox" className="w-4 h-4 float-left ml-[-24px] mt-1 rounded-md" id="exampleCheck1"/>
                <label className="inline-block text-base text-white font-normal" for="exampleCheck1">
                    Я согласен получать уведомления о новых продуктах и предложениях BCN EXP и его партнеров
                </label>
            </div>
        </div>
    </div>
  )
}

export default Registration