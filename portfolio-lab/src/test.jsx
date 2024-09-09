


// import { useState } from "react";


// function Test() {

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePageClick = (index) => {
//     setActiveIndex(index);
//   }


//   const handleHelpColumnClick = (index) => {
//     setActiveIndex(index);
//   }

//   return (
//     <>
//     <section className="who-help" id='who-help'>
//       <div className="container">
//         <h1>Komu pomagamy?</h1>
//         <div className="help-columns">
//           <div className="help-column" onClick={() => handleHelpColumnClick(0)}>
//             Fundacjom
//           </div>
//           <div className="help-column" onClick={() => handleHelpColumnClick(1)}>
//             Organizacjom pozarządowym
//           </div>
//           <div className="help-column" onClick={() => handleHelpColumnClick(2)}>
//             Lokalnym zbiórkom
//           </div>
//         </div>
//         <div className="help-section-description">
//           W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
//         </div>
        
//         {/* Zawartości do przełączania */}
//         {activeIndex === 0 && (
//           <div className="list-item">
//             <div className="list-content">
//               <div>
//                 <h2>Fundacja "Dbam o Zdrowie"</h2>
//                 <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
//               </div>
//               <div className="needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
//             </div>
//           </div>
//         )}
//         {activeIndex === 1 && (
//           <div className="list-item">
//             <div className="list-content">
//               <div>
//                 <h2>Organizacja "Pomocna Dłoń"</h2>
//                 <p>Cel i misja: Wsparcie dla osób starszych i niepełnosprawnych.</p>
//               </div>
//               <div className="needs">leki, sprzęt medyczny, wolontariusze</div>
//             </div>
//           </div>
//         )}
//         {activeIndex === 2 && (
//           <div className="list-item">
//             <div className="list-content">
//               <div>
//                 <h2>Zbiórka "Pomoc dla Zwierząt"</h2>
//                 <p>Cel i misja: Wsparcie schronisk dla zwierząt.</p>
//               </div>
//               <div className="needs">karma, koce, zabawki dla zwierząt</div>
//             </div>
//           </div>
//         )}
        
//         <div className="pagination">
//           {[0, 1, 2].map(index => (
//             <div
//               key={index}
//               className={`page ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => handlePageClick(index)}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     </>
//   )
// }


// export default Test;



import React, { useState } from "react";
import { Link } from "react-scroll";

function GiveThings() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        items: [],
        bags: "1",
        location: "warszawa",
        helpFor: [],
        organization: "",
        address: {
            street: "",
            city: "",
            postalCode: "",
            phone: "",
        },
        pickup: {
            date: "",
            time: "",
            comments: ""
        },
        contact: {
            firstName: "",
            lastName: "",
            email: ""
        }
    });

    const handleNextButton = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData(prevData => ({
                ...prevData,
                [name]: checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to Supabase
        console.log(formData);
    };

    return (
        <>
            <nav className="header" id='header'>
                <ul className="up-menu-section">
                    <li><a href="#">Zaloguj się</a></li>
                    <li><a href="#">Załóż konto</a></li>
                </ul>
                <ul className="down-menu-section">
                    <li><Link to="header" smooth={true} duration={500}>Start</Link></li>
                    <li><Link to="what-mean" smooth={true} duration={500}>O co chodzi</Link></li>
                    <li><Link to="about-us" smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="who-help" smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Kontakt</Link></li>
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
                            <div className="step"><span>1</span><p>Wybierz rzeczy</p></div>
                            <div className="step"><span>2</span><p>Spakuj je</p></div>
                            <div className="step"><span>3</span><p>Wybierz organizację</p></div>
                            <div className="step"><span>4</span><p>Zamów kuriera</p></div>
                        </div>
                    </div>
                </div>
                <footer className="give-things-footer">
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </footer>
            </section>

            <section className="second-checkbox-section">
                {activeStep === 0 && (
                    <div className="form-container">
                        <p className="steps-text">Krok 1/4</p>
                        <div className="form-content">
                            <form>
                                <p className="form-title">Zaznacz, co chcesz oddać</p>
                                <div className="checkboxes">
                                    <label>
                                        <input type="checkbox" name="items" value="Ubrania" onChange={handleChange} />
                                        <p>Ubrania, które są w dobrym stanie</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="items" value="Zabawki" onChange={handleChange} />
                                        <p>Zabawki</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="items" value="Książki" onChange={handleChange} />
                                        <p>Książki</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="items" value="Inne rzeczy" onChange={handleChange} />
                                        <p>Inne rzeczy</p>
                                    </label>
                                </div>
                                <button type="button" onClick={handleNextButton}>Dalej</button>
                            </form>
                        </div>
                    </div>
                )}
                {activeStep === 1 && (
                    <section className="form-container">
                        <div className="form-content">
                            <h3>Podaj liczbę worków</h3>
                            <form>
                                <label htmlFor="bags">Liczba worków (60l)</label>
                                <select id="bags" name="bags" onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <div>
                                    <button type="button" onClick={handleBack}>Wstecz</button>
                                    <button type="button" onClick={handleNextButton}>Dalej</button>
                                </div>
                            </form>
                        </div>
                    </section>
                )}
                {activeStep === 2 && (
                    <section className="form-container">
                        <div className="form-content">
                            <h2>Lokalizacja:</h2>
                            <form>
                                <label htmlFor="location">Wybierz lokalizację</label>
                                <select id="location" name="location" onChange={handleChange}>
                                    <option value="warszawa">Warszawa</option>
                                    <option value="szczecin">Szczecin</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                </select>
                                <h2>Komu chcesz pomóc?</h2>
                                <label>
                                    <input type="checkbox" name="helpFor" value="Dzieciom" onChange={handleChange} />
                                    Dzieciom
                                </label>
                                <label>
                                    <input type="checkbox" name="helpFor" value="Samotnym matkom" onChange={handleChange} />
                                    Samotnym matkom
                                </label>
                                <label>
                                    <input type="checkbox" name="helpFor" value="Bezdomnym" onChange={handleChange} />
                                    Bezdomnym
                                </label>
                                <h2>Wpisz nazwę konkretnej organizacji (opcjonalne)</h2>
                                <input type="text" name="organization" placeholder="Nazwa organizacji" onChange={handleChange} />
                                <div>
                                    <button type="button" onClick={handleBack}>Wstecz</button>
                                    <button type="button" onClick={handleNextButton}>Dalej</button>
                                </div>
                            </form>
                        </div>
                    </section>
                )}
                {activeStep === 3 && (
                    <section className="form-container">
                        <div className="form-content">
                            <h2>Podaj adres i termin odbioru:</h2>
                            <form>
                                <h2>Adres odbioru</h2>
                                <label htmlFor="street">Ulica</label>
                                <input id="street" name="address.street" type="text" onChange={handleChange} />
                                <label htmlFor="city">Miasto</label>
                                <input id="city" name="address.city" type="text" onChange={handleChange} />
                                <label htmlFor="postalCode">Kod pocztowy</label>
                                <input id="postalCode" name="address.postalCode" type="text" onChange={handleChange} />
                                <label htmlFor="phone">Numer telefonu</label>
                                <input id="phone" name="address.phone" type="text" onChange={handleChange} />
                                <h2>Termin odbioru</h2>
                                <label htmlFor="date">Data</label>
                                <input id="date" name="pickup.date" type="date" onChange={handleChange} />
                                <label htmlFor="time">Godzina</label>
                                <input id="time" name="pickup.time" type="time" onChange={handleChange} />
                                <label htmlFor="comments">Uwagi dla kuriera</label>
                                <input id="comments" name="pickup.comments" type="text" onChange={handleChange} />
                                <div>
                                    <button type="button" onClick={handleBack}>Wstecz</button>
                                    <button type="button" onClick={handleNextButton}>Dalej</button>
                                </div>
                            </form>
                        </div>
                    </section>
                )}
                {activeStep === 4 && (
                    <section className="slider-render4">
                        <div>
                            <img src="" alt="Obraz związany z oddaniem rzeczy" />
                            <form onSubmit={handleSubmit}>
                                <h2>Skontaktuj się z nami</h2>
                                <label htmlFor="firstName">Imię</label>
                                <input id="firstName" name="contact.firstName" type="text" onChange={handleChange} />
                                <label htmlFor="lastName">Nazwisko</label>
                                <input id="lastName" name="contact.lastName" type="text" onChange={handleChange} />
                                <label htmlFor="email">Email</label>
                                <input id="email" name="contact.email" type="email" onChange={handleChange} />
                                <button type="submit">Wyślij</button>
                            </form>
                        </div>
                    </section>
                )}
            </section>
        </>
    );
}

export default GiveThings;
