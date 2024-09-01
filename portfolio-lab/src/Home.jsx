
// import './components/main.scss';



function Home() {


  return (
    <>
      {/* <nav className="header">
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
      </nav> */}

      <section className="home-first-section">


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
        <div className="container-first-screen">
          <img src="dodatki/Home-Hero-Image.jpg" alt="" className="first-section-image"/>
          <div className="start-helping">
              <h1>Zacznij pomagać!</h1>
              <h1>Oddaj niechciane rzeczy w dobre ręce</h1>
              <img src="dodatki/Decoration.svg" alt="" className="decoration-abstract-image"/>
              <div>
                <button>ODDAJ<br></br> RZECZY</button>
                <button>ZORGANIZUJ<br></br> ZBIÓRKĘ</button>
              </div>
          </div>
        </div>
        

        <footer className="first-screen-footer">
          <div className="column">
              <p>10</p>
              <h2>ODDANYCH WORKÓW</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
          </div>
          <div className="column">
              <p>5</p>
              <h2>WSPARTYCH ORGANIZACJI</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
          </div>
          <div className="column">
              <p>7</p>
              <h2>ZORGANIZOWANY ZBIÓREK</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
          </div>
        </footer>
        
      </section>

      
        
     
      <section className="second-screen-section">
        
            <div className="container-second-section">
              <h2>Wystarczą 4 proste kroki</h2>
              <img src="dodatki/Decoration.svg" alt="" className="decoration-abstract-image"/>
            </div>

        
            <div className="columns-second-section">
                <div className="column">
                    <img src="dodatki/Icon.png" alt="" />
                    <p className="title-of-thing">Wybierz rzeczy</p>
                    <p className="description-of-thing">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="column">
                    <img src="dodatki/Icon-2.svg" alt="" />
                    <p className="title-of-thing">Spakuj je</p>
                    <p className="description-of-thing">skorzystaj z worków na śmieci</p>
                </div>
                <div className="column-2">
                    <img src="dodatki/Icon-3.svg" alt="" />
                    <p className="title-of-thing">Zdecyduj komu chcesz pomóc</p>
                    <p className="description-of-thing">wybierz zaufane miejsce</p>
                </div>
                <div className="column">
                    <img src="dodatki/Icon-4.svg" alt="" />
                    <p className="title-of-thing">Zamów kuriera</p>
                    <p className="description-of-thing">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>

        <div className="container-button-second-section">
          <button>ODDAJ <br></br>RZECZY</button>
        </div>
        
      </section>





      <section className="section-about-us">

        
          <div className="container-about-us">

            <div className="about-us">
                <h2>O nas</h2>
                <img src="dodatki/Decoration.svg" alt="" className="decoration-abstract-image"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src="dodatki/Signature.svg" alt="" className="signature"/>
            </div>
            

            <div className="people">
              <img src="dodatki/People.jpg" alt="" className="sign"/> 
            </div>
            
          </div>

          
        



        

        
      </section>





      <section className="who-help">
        
            
              <h2>Komu pomagamy</h2>
              
            
           
       
      </section>







      <section className="section-contact">
        
        <div className="contact">
            <h2>Skontakuj się z nami</h2>
            <img src="dodatki/Decoration.svg" alt="" className="decoration"/>
            <form action="">
                <input type="text" placeholder="Imię"/>
                <input type="text" placeholder="Nazwisko"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Wiadomość"></textarea>
                <button>Wyślij</button>
            </form>
            <img src="dodatki/Background-Contact-Form.jpg" alt="" className="contact-background-photo"/>
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


