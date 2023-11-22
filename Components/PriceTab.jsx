import React from 'react'

function PriceTab() {
  return (
    <div className="container md:px-12">
        {/* <!-- Section: Plans --> */}
        <div className="section">
          <div className="flex-wrap  justify-center flex pb-5 lg:pb-2">
            {/* <!-- col-sm-12 col-lg-6 col-xl-2 --> */}
            <div className="sm:w-2/5 md:w-1/4 xl:w-1/5 pr-4 pl-4 px-1 pb-4">
              <div className="inline-block align-middle select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline text-center text-main bg-notgrad py-2 rounded-3 w-full">1 месяц</div>
            </div>
            <div className="sm:w-2/5 md:w-1/4 xl:w-1/5 pr-4 pl-4 px-1 pb-4">
              <div className="inline-block align-middle select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline text-center text-main bg-grad py-2 rounded-3 w-full">3 месяца</div>
            </div>
            <div className="sm:w-2/5 md:w-1/4 xl:w-1/5 pr-4 pl-4 px-1 pb-4">
              <div className="inline-block align-middle select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline text-center text-main bg-notgrad py-2 rounded-3 w-full">6 месяцев</div>
            </div>
            <div className="sm:w-2/5 md:w-1/4 xl:w-1/5 pr-4 pl-4 px-1 pb-4">
              <div className="inline-block align-middle select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline text-center text-main bg-notgrad py-2 rounded-3 w-full">12 месяцев</div>
            </div>
        </div>
        {/* <!-- Section: Cards --> */}
        <div className="section">
        <div className="flex-wrap  justify-center flex pb-5 lg:pb-2">

          <div className="sm:w-full lg:w-1/2 xl:w-1/3 pr-4 pl-4 px-4 pb-4">
            <div className="relative flex flex-col min-w-0 rounded break-words bg-white border-1 border-gray-300 border-0 rounded-3 bg-notgrad text-main h-full">
              <div className="flex-auto p-6 relative">
                <h5 className="mb-3 pb-2 text-main fs-2 fw-semibold">FREE</h5>
                <p className="mb-0 text-main fw-light fs-6">Попробуйте бесплатные возможности сервиса!</p>
                <p className="mb-0 text-main fw-semibold">
                  </p><div className="text-main fw-bold text-lg">
                    0
                    <span className="text-main fw-bold text-lg">$</span>
                  </div>
                <p></p>
                <div className="block lg:pt-6">
                  <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline card-buttons text-main fw-semibold p-6 pt-4 ps-0 pb-0 fs-6 bg-transparent">
                    Начать &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 1 --> */}
          <div className="sm:w-full lg:w-1/2 xl:w-1/3 pr-4 pl-4 px-4 pb-4">
            <div className="relative flex flex-col min-w-0 rounded break-words bg-white border-1 border-gray-300 border-0 rounded-3 bg-grad text-main h-full">
              <div className="flex-auto p-6">
                <h5 className="mb-3 pb-2 text-main fs-2 fw-semibold">PREMIUM</h5>
                <p className="mb-0 text-main fw-light fs-6">Получите доступ ко всем возможностям сервиса!</p>
                <p className="mb-0 text-main fw-semibold">
                  </p><div className="text-main fw-bold w-">
                    31.5
                    <span className="text-main fw-bold">$  / месяц</span>
                  </div>
                <p></p>
                <span className="text-main strik fw-semibold"><del>540</del> 378 $</span>
                <div className="block">
                  <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline card-buttons text-main fw-semibold p-6 pt-4 ps-0 pb-0 fs-6 bg-transparent">
                    Купить премиум &gt;
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>

        {/* <!-- Section: Cards --> */}
      <div className="section">
      <div className="flex-wrap  justify-center hidden lg:flex pb-5">

        <div className="sm:w-full lg:w-1/2 xl:w-1/3 pr-4 pl-4 px-4 pb-4 ">
          <div className="">
            <div className="flex-auto p-6 relative">
              <h5 className="mb-3 pb-2 text-main fs-5 fw-semibold">Вы получаете</h5>
              <p className="mb-0 text-main fw-light fs-6">— Доступ к бесплатным/стартовым урокам, статьям и курсам</p>
              <p className="mb-0 text-main fw-light fs-6">— Доступ к базовому функционалу аналитики</p>
              <p className="mb-0 text-main fw-light fs-6">— Партнерские выплаты до 4-го поколения (включительно)</p>
            </div>
          </div>
        </div>
        {/* <!-- 1 --> */}
        <div className="sm:w-full lg:w-1/2 xl:w-1/3 pr-4 pl-4 px-4 pb-4">
          <div className="">
            <div className="flex-auto p-6 relative">
              <h5 className="mb-3 pb-2 text-main fs-5 fw-semibold">Все из тарифа FREE + </h5>
              <p className="mb-0 text-main fw-light fs-6">— Доступ к всем урокам, статьям и курсам</p>
              <p className="mb-0 text-main fw-light fs-6">— Доступ к полному функционалу аналитики</p>
              <p className="mb-0 text-main fw-light fs-6">— Партнерские выплаты до 10-го поколения (включительно)</p>
              <p className="mb-0 text-main fw-light fs-6">— Софт для арбитража</p>
              <p className="mb-0 text-main fw-light fs-6">— Партнерское/реферальное обучение</p>
              <p className="mb-0 text-main fw-light fs-6">— Ускоренный вывод средств</p>
              <p className="mb-0 text-main fw-light fs-6">— Быстрый отклик от тех.поддержки</p>
              <div className="block">
                <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-main bg-hover-same fw-semibold p-6 ps-0 pb-0 fs-6 bg-transparent hover:text-text-main">
                  Узнать больше &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>

      {/* <!-- Section: Cards --> */}

    </div></div></div></div>
  )
}

export default PriceTab