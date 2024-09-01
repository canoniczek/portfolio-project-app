
// // import './components/main.scss';



// function GiveThings() {


//     return (
//       <>
//         <nav className="header">
//           <ul>
//               <li>Cześć</li>
//               <li>Oddaj rzeczy</li>
//               <li>Wyloguj</li>
//           </ul>
//           <ul>
//               <li>Start</li>
//               <li>O co chodzi?</li>
//               <li>O nas</li>
//               <li>Fundacja i organizacje</li>
//               <li>Kontakt</li>
//           </ul>
//         </nav>
//         <section>
//             <div>
//                 <h1>Oddaj rzeczy, których ju nie chcesz POTRZEBUJACYM</h1>
//             </div>
//         </section>
//       </>
//     )
//   }
  
//   export default GiveThings;
  
  
  

import React from "react";

function GiveThings() {
    return (
        <>
            <menu></menu>
            <section className="background">
                <div>
                    <h2>Oddaj rzeczy</h2>
                    <p>Wystarczą cztery proste kroki, aby oddać rzeczy, których już nie potrzebujesz!</p>
                    <div>
                        <p>1</p>
                        <p>Wybierz rzeczy</p>
                    </div>
                    <div>
                        <p>2</p>
                        <p>Spakuj je</p>
                    </div>
                    <div>
                        <p>3</p>
                        <p>Wybierz organizację</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>Zamów kuriera</p>
                    </div>
                </div>
                <footer>
                    <h2>Ważne!</h2>
                    <p>Wszystkie rzeczy do oddania zapakuj w worki o pojemności 60 litrów.</p>
                </footer>
            </section>

            <section className="slider-render">
                <div>
                    <h3>Oddaj rzeczy, które już nie są Ci potrzebne</h3>
                    <form>
                        <p style={{ fontWeight: "bold" }}>Zaznacz, co chcesz oddać</p>
                        <label>
                            <input type="checkbox" />
                            Ubrania, które są w dobrym stanie
                        </label>
                        <label>
                            <input type="checkbox" />
                            Zabawki
                        </label>
                        <label>
                            <input type="checkbox" />
                            Książki
                        </label>
                        <label>
                            <input type="checkbox" />
                            Inne rzeczy
                        </label>
                        <button type="submit">Dalej</button>
                    </form>
                </div>
            </section>

            {/* Po kliknięciu */}
            <section className="slider-render">
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
            </section>
        </>
    );
}

export default GiveThings;