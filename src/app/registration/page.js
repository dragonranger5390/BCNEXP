

export default function Page() {
    return (
      <>
      <footer className="block text-center text-white pb-4">
        {/* <!-- Copyright --> */}
        <div className="text-center text-text-footer">
            <a href="#" className="text-text-footer px-1 no-underline">Правила пользования</a>
            <a href="#" className="text-text-footer px-1 no-underline">Политика конфиденциальности</a>
            <a href="#" className="text-text-footer px-1 no-underline">Безопасность</a>
        </div>

        <div className="text-center text-text-footer p-3">
          © 2023 BCNEXP.com 
          <a className="text-text-footer no-underline" href="../"> Все права защищены</a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>
      </>
    )
  }