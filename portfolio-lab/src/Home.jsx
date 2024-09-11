

import './components/main.scss';

import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {signOut} from './supabase/authSlice';

import { sendContactForm } from './supabase/supabase';

function Home() {

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const handleSendFormula = async (e) => {
      e.preventDefault();
      


      const formula = {
        imie: nameRef.current.value,
        email: emailRef.current.value,
        wiadomosc: messageRef.current.value
      }

      console.log(formula);

      const {data, error} = await sendContactForm(formula);

      if (error) {
        console.log('Problem')
      } else {
        alert('Pomyslnie wyslano')
      }
    }


    const navigate = useNavigate();

    const handleGiveThings = () => {
      navigate('/give-things');
    }

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(signOut());
    };


    const [activeIndex, setActiveIndex] = useState(0);

    const handlePageClick = (index) => {
      setActiveIndex(index);
    }


    const handleHelpColumnClick = (index) => {
      setActiveIndex(index);
    }

    return (
      <>
        <nav className="header" id='header'>
            <ul className="up-menu-section">
                <li><a href="#">Zaloguj się</a></li>
                <li><a href="#">Załóż konto</a></li>
                <li onClick={handleLogout}><a href="">Wyloguj</a></li>
            </ul>
            <ul className="down-menu-section">
                <li>
                  <Link to="header" smooth={true} duration={500}>Start</Link>
                </li>
                <li>
                  <Link to="what-mean" smooth={true} duration={500}>O co chodzi</Link>
                </li>
                <li>
                  <Link to="about-us" smooth={true} duration={500}>O nas</Link>
                </li>
                <li>
                  <Link to="who-help" smooth={true} duration={500}>Fundacja i organizacje</Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>Kontakt</Link>
                </li>
            </ul>
        </nav> 
  
        <section className="home-first-section">
          <div className="container-first-screen">
            <img src="dodatki/Home-Hero-Image.jpg" alt="" className="first-section-image"/>
            <div className="start-helping">
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w dobre ręce</h1>
                <img src="dodatki/Decoration.svg" alt="" className="decoration-abstract-image"/>
                <div>
                  <button onClick={handleGiveThings}>ODDAJ<br></br> RZECZY</button>
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
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
            </div>
          </footer>
        </section>
  
        <section className="second-screen-section" id='what-mean'>
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
            <button onClick={handleGiveThings}>ODDAJ <br/>RZECZY</button>
          </div>
        </section>
  
        <section className="section-about-us" id='about-us'>
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
















  
        <section className="who-help" id='who-help'>
        <div className="container">
        <h1>Komu pomagamy?</h1>
        <div className="help-columns">
          <div className="help-column" onClick={() => handleHelpColumnClick(0)}>
            Fundacjom
          </div>
          <div className="help-column" onClick={() => handleHelpColumnClick(1)}>
            Organizacjom pozarządowym
          </div>
          <div className="help-column" onClick={() => handleHelpColumnClick(2)}>
            Lokalnym zbiórkom
          </div>
        </div>
        <div className="help-section-description">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        
       
        {activeIndex === 0 && (
          <div className="list-item">
            <div className="list-content">
              <div>
                <h2>Fundacja "Dbam o Zdrowie"</h2>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
              </div>
              <div className="needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Fundacja "Dbam o Zdrowie"</h2>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
              </div>
              <div className="needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Fundacja "Dbam o Zdrowie"</h2>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
              </div>
              <div className="needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
          </div>
          
        )}
        {activeIndex === 1 && (
          <div className="list-item">
            <div className="list-content">
              <div>
                <h2>Organizacja "Pomocna Dłoń"</h2>
                <p>Cel i misja: Wsparcie dla osób starszych i niepełnosprawnych.</p>
              </div>
              <div className="needs">leki, sprzęt medyczny, wolontariusze</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Organizacja "Pomocna Dłoń"</h2>
                <p>Cel i misja: Wsparcie dla osób starszych i niepełnosprawnych.</p>
              </div>
              <div className="needs">leki, sprzęt medyczny, wolontariusze</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Organizacja "Pomocna Dłoń"</h2>
                <p>Cel i misja: Wsparcie dla osób starszych i niepełnosprawnych.</p>
              </div>
              <div className="needs">leki, sprzęt medyczny, wolontariusze</div>
            </div>


          </div>
        )}
        {activeIndex === 2 && (
          <div className="list-item">
            <div className="list-content">
              <div>
                <h2>Zbiórka "Pomoc dla Zwierząt"</h2>
                <p>Cel i misja: Wsparcie schronisk dla zwierząt.</p>
              </div>
              <div className="needs">karma, koce, zabawki dla zwierząt</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Zbiórka "Pomoc dla Zwierząt"</h2>
                <p>Cel i misja: Wsparcie schronisk dla zwierząt.</p>
              </div>
              <div className="needs">karma, koce, zabawki dla zwierząt</div>
            </div>
            <div className="list-content">
              <div>
                <h2>Zbiórka "Pomoc dla Zwierząt"</h2>
                <p>Cel i misja: Wsparcie schronisk dla zwierząt.</p>
              </div>
              <div className="needs">karma, koce, zabawki dla zwierząt</div>
            </div>
          </div>
        )}
        
        <div className="buttons-who-help">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              className={`page ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
        </section>
  















  
        <section className="section-contact" id='contact'>
          <div className="contact">
              <div className="contact-inside">
                <h2>Skontakuj się z nami</h2>
                <img src="dodatki/Decoration.svg" alt="" className="decoration"/>
              </div>
              <form action="" onSubmit={handleSendFormula}>
                  <div className="input-container">
                    <input type="text" placeholder="Imię" ref={nameRef}/>
                    <input type="email" placeholder="Email" ref={emailRef}/>
                  </div>
                  <textarea placeholder="Wiadomość" ref={messageRef}></textarea>
                  <button type="submit">Wyślij</button>
              </form>
          </div>
          <footer className='footer-copyright'>
            <p>Copyright by Coders Lab</p>
            <img src="" alt="" className="Facebook"/>
            <img src="" alt="" className="Instagram"/>
        </footer> 
        </section>
  
        
      </>
    )
  }
  
  export default Home;
  