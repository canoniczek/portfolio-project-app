
// import './components/main.scss';



function SignUp() {


    return (
      <>
        <nav className="header">
          <ul>
              <li>Zaloguj się</li>
              <li>Załóż konto</li>
          </ul>
          <ul>
              <li>Start</li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
          </ul>
        </nav>
        <section>
            <div>
                <h1>Zarejestruj się</h1>
                <form action="">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email"/>
                    <label for="email">Password</label>
                    <input type="password" placeholder="Hasło"/>
                    <button><a href="">Załóż konto</a></button>
                </form>
            </div>
        </section>
      </>
    )
  }
  
  export default SignUp;
  
  
  