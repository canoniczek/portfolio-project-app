
// import './components/main.scss';



function SignUp() {


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
        
        <section className="sign-up-section">
            <div>
                <h1>Zarejestruj się</h1>
                <form action="">
                    <label for="email">Email</label>
                    <input type="email"/>
                    <label for="password">Hasło</label>
                    <input type="password"/>
                    <label for="password">Powtórz hasło</label>
                    <input type="password"/>
                </form>
                <div className="button-sign-in">
                      <button>Zaloguj się</button>
                      <button><a href="">Załóż konto</a></button>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default SignUp;
  
  
  