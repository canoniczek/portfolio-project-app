
// import './components/main.scss';



function Home() {


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
        <img src="" alt="" />
        <div>
            <h1>Zacznij pomagać! Oddaj rzeczy w zaufane ręce</h1>
            <button>ODDAJ RZECZY</button>
            <button>ZORGANIZUJ ZBIÓRKĘ</button>
        </div>
      </section>
      <section>
        <div className="column">
            <p>10</p>
            <h2>Lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className="column">
            <p>10</p>
            <h2>Lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className="column">
            <p>10</p>
            <h2>Lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
        </div>
      </section>
      <section>
        <div>
            <h2>Wystarcz 4 proste kroki</h2>
            {/* czy da się after dla h2? */}
            <img></img>
        </div>
        <div>
            <div>
                <img src="" alt="" />
                <p>Tytul przedmiotu</p>
                <p>Opis przedmiotu</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Tytul przedmiotu</p>
                <p>Opis przedmiotu</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Tytul przedmiotu</p>
                <p>Opis przedmiotu</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Tytul przedmiotu</p>
                <p>Opis przedmiotu</p>
            </div>
        </div>
        <button>ODDAJ RZECZY</button>
      </section>
      <section className="about_us">
        <div>
            <h2>O nas</h2>
            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            <img src="" alt="" className="sign"/>
        </div>
        <img src="" alt="" />
      </section>
      <section className="who_help">
        <div>
            <div className="section_choose">
                <h2>Komu pomagamy?</h2>
                <img src="" alt="" />
                {/* after dla h2 */}
                <button>Fundacjom</button>
                <button>Organizacjom pozarzdowym</button>
                <button>Lokalnym zbiórkom</button>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
            <div className="list_generate">
                <ul>
                    <li>Fudnacja dbam o zdrowie</li>
                    <li>Fudnacja dbam o zdrowie</li>
                    <li>Fudnacja dbam o zdrowie</li>
                </ul>
            </div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
      </section>
      <section className="contact">
        <img src="" alt="" />
        <div>
            <h2>Skontakuj się z nami</h2>
            <form action="">
                <input type="text" placeholder="Imię"/>
                <input type="text" placeholder="Nazwisko"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Wiadomość"></textarea>
                <button>Wyślij</button>
            </form>
        </div>
      </section>
      <footer>
        <p>Copyright by Coders Lab</p>
        <img src="" alt="" className="Facebook"/>
        <img src="" alt="" className="Instagram"/>
      </footer>
    </>
  )
}

export default Home;


