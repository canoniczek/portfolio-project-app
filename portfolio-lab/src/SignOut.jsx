




function SignOut() {


    return (
      <>
        <nav className="header">
          <ul className="up-menu-section">
              <li><a href="#">Zaloguj się</a></li>
              <li><a href="#">Załóż konto</a></li>
          </ul>
          <ul className="down-menu-section">
              <li><a href="#">Start</a></li>
              <li><a href="#">O co chodzi?</a></li>
              <li><a href="#">O nas</a></li>
              <li><a href="#">Fundacja i organizacje</a></li>
              <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>


        <section className="log-out-section">
            <div>
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <button>Strona główna</button>
            </div>
        </section>
      </>
    )
  }
  
  export default SignOut;
  
  
  