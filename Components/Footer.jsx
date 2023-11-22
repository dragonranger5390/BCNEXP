import React from 'react'

function Footer() {
  return (
        <footer className="text-center text-white bg-bg-footer">
  {/* <!-- Grid container --> */}
  <div className="container mx-auto p-12">

    {/* <!-- Section: Links --> */}
    <section>
      {/* <!--Grid row--> */}
      <div className="grid grid-cols-12">
        {/* <!--Grid column--> */}
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-6 lg:mb-0">
          <div className="uppercase text-xl">BCN EXP</div>
            <div className="text-CR-color">Многофунциональный сервис с глобальным сообществом в одном месте.
            </div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-6 lg:mb-0">
          <div className="text-xl">Продукты</div>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-footer">Обучение</a>
            </li>
            <li>
              <a href="#!" className="text-footer">Аналитика</a>
            </li>
            <li>
              <a href="#!" className="text-footer">Крипто-арбитраж</a>
            </li>
            <li>
              <a href="#!" className="text-footer">События</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-6 lg:mb-0">
          <h5 className="text-xl">Полезные ссылки</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-footer fs-6">Правила пользования</a>
            </li>
            <li>
              <a href="#!" className="whitespace-nowrap text-footer">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#!" className="text-footer">Roadmap</a>
            </li>
            <li>
              <a href="#!" className="text-footer">Whitepaper</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-span-12 lg:col-span-3 md:col-span-6 mb-6 lg:mb-0">
          <h5 className="text-xl">Связь с нами</h5>
          <div className="text-footer">
            <a id="email" href="mailto: aldearianas5390@gmail.com">
              info@email.com
            </a>
          </div>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </section>
    {/* <!-- Section: Links --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-6 text-CR-color">
    © 2023 BCNEXP.com
    <a className="no-underline text-CR-color" href="#!"> Все права защищены</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
  )
}

export default Footer