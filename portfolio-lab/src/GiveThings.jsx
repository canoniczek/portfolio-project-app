

  
  
  

import React from "react";
import { Link } from "react-scroll";

function GiveThings() {
    return (
        <>

            <nav className="header" id='header'>
                <ul className="up-menu-section">
                    <li><a href="#">Zaloguj się</a></li>
                    <li><a href="#">Załóż konto</a></li>
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


            <section className="first-section-give-things">
                <div className="give-things-container">
                    <img src="dodatki/Form-Hero-Image.jpg" alt="" className="first-section-image"/>
                    <div className="give-things">
                        <h1>Oddaj rzeczy, których już nie chcesz</h1>
                        <br/>
                        <h1>POTRZEBUJĄCYM</h1>
                        <img src="dodatki/Decoration.svg" alt="" className="decoration-abstract-image"/>
                        <h1>Wystarczą 4 proste kroki:</h1>

                        <div className="steps">
                            <div className="step">
                                <span>1</span>
                                <p>Wybierz rzeczy</p>
                            </div>
                            <div className="step">
                                <span>2</span>
                                <p>Spakuj je</p>
                            </div>
                            <div className="step">
                                <span>3</span>
                                <p>Wybierz organizację</p>
                            </div>
                            <div className="step">
                                <span>4</span>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <footer className="give-things-footer">
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </footer>
            </section>








            <section className="second-checkbox-section">
                <div className="form-container">
                    <p className="steps-text">Krok 1/4</p>
                        <div className="form-content">
                            
                            <form>
                                <p className="form-title">Zaznacz, co chcesz oddać</p>
                                <div className="checkboxes">
                                    <label>
                                        <input type="checkbox" />
                                        <p>Ubrania, które są w dobrym stanie</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Zabawki</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Książki</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Inne rzeczy</p>
                                    </label>
                                </div>
                                <button type="submit">Dalej</button>
                            </form>
                        </div>
                  
                </div>
            </section>










            {/* Po kliknięciu */}
            {/* <section className="slider-render">
                <div>
                    <h3>Podaj liczbę worków</h3>
                    <form>
                        <label htmlFor="bags">Liczba worków (60l)</label>
                        <select id="bags" name="bags">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div>
                            <button type="button">Wstecz</button>
                            <button type="submit">Dalej</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="slider-render">
                <div>
                    <h2>Lokalizacja:</h2>
                    <form>
                        <label htmlFor="location">Wybierz lokalizację</label>
                        <select id="location" name="location">
                            <option value="warszawa">Warszawa</option>
                            <option value="szczecin">Szczecin</option>
                            <option value="zimbabwe">Zimbabwe</option>
                        </select>

                        <h2>Komu chcesz pomóc?</h2>
                        <label>
                            <input type="checkbox" />
                            Dzieciom
                        </label>
                        <label>
                            <input type="checkbox" />
                            Samotnym matkom
                        </label>
                        <label>
                            <input type="checkbox" />
                            Bezdomnym
                        </label>

                        <h2>Wpisz nazwę konkretnej organizacji (opcjonalne)</h2>
                        <input type="text" placeholder="Nazwa organizacji" />

                        <div>
                            <button type="button">Wstecz</button>
                            <button type="submit">Dalej</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="slider-render">
                <div>
                    <h2>Podaj adres i termin odbioru:</h2>
                    <form>
                        <h2>Adres odbioru</h2>
                        <label htmlFor="street">Ulica</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">Miasto</label>
                        <input id="city" type="text" />

                        <label htmlFor="postalCode">Kod pocztowy</label>
                        <input id="postalCode" type="text" />

                        <label htmlFor="phone">Numer telefonu</label>
                        <input id="phone" type="text" />

                        <h2>Termin odbioru</h2>
                        <label htmlFor="date">Data</label>
                        <input id="date" type="date" />

                        <label htmlFor="time">Godzina</label>
                        <input id="time" type="time" />

                        <label htmlFor="comments">Uwagi dla kuriera</label>
                        <input id="comments" type="text" />

                        <div>
                            <button type="button">Wstecz</button>
                            <button type="submit">Dalej</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="slider-render">
                <div>
                    <img src="" alt="Obraz związany z oddaniem rzeczy" />
                    <form>
                        <h2>Skontaktuj się z nami</h2>
                        <label htmlFor="firstName">Imię</label>
                        <input id="firstName" type="text" />

                        <label htmlFor="lastName">Nazwisko</label>
                        <input id="lastName" type="text" />

                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" />

                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </section> */}



        <section className="section-contact" id='contact'>
          <div className="contact">
                <div className="contact-inside">
                    <h2>Skontakuj się z nami</h2>
                    <img src="dodatki/Decoration.svg" alt="" className="decoration"/>
                </div>
                <form action="">
                    <div className="input-container">
                        <input type="text" placeholder="Imię"/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <textarea placeholder="Wiadomość"></textarea>
                    <button>Wyślij</button>
                </form>
                </div>
                <footer className='footer-copyright'>
                    <p>Copyright by Coders Lab</p>
                    <img src="" alt="" className="Facebook"/>
                    <img src="" alt="" className="Instagram"/>
                </footer> 
        </section>
        </>
    );
}

export default GiveThings;