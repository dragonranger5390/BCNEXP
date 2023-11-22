'use client'
import Image from "next/image"
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
      <div class="container container-registration pt-5 mt-5">
        <div class="row justify-content-center my-4">
            {/* <!-- ((2)) - Put your image / icon here --> */}
            <Image className='mx-auto' alt="Laufmix" src="/logo-techwork.png" width={160} height={160}/>
        </div>
        <div class="row p-3">
            <div class="text-center fs-4 fw-bold" style="color: #d2d8e1;">
                Ведутся технические работы
            </div>
        </div>
        <div class="row p-3">
            <div class="text-center text-white fs-6 fw-normal" style="color: #d2d8e1;">
                В данный момент на сайте проводятся технические работы над улучшением качества нашего сервиса. Совсем скоро страница станет доступна.
            </div>
        </div>
        <div class="row p-3">
            <div class="text-center text-white fs-6" style="color: #d2d8e1;">
                С уважением, BCN Experience
            </div>
        </div>
    </div>
    <footer class="text-center text-white pb-3 mt-auto">
        {/* <!-- Copyright --> */}
        <div class="text-center text-footer p-3" style="color: #d2d8e1;">
          © 2023 BCNEXP.com 
          <a class="text-footer" style="color: #d2d8e1; text-decoration: none" href="#">Все права защищены</a>
        </div>
        {/* <!-- Copyright --> */}
    </footer>
      </body>
    </html>
  )
}