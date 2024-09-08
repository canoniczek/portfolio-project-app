


import { useState } from "react";

// function Test() {

    
//       const [activeIndex, setActiveIndex] = useState(1);
    


//     const slides = [
//       "Przykladowy test",
//       "Kolejny test",
//       "Następny test"
//     ]

//     const handlePrev = () => {
//       setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//     }

//     const handleNext = () => {
//       setActiveIndex((prevIndex) => (prevIndex === slides.length - 1? 0 : prevIndex + 1));
//     }

//     return (
//       <>

  
  
  
//   <section className="testing">           
              
//   <div class="carousel">
//         {slides.map((text, index) => (
//           <div key={index} className={`slide ${index === activeIndex ? 'active' : ''}`}>
//             {text}
//           </div>  
//         ))}
//         <div class="controls">
//           <span class="material-symbols-outlined prev" onClick={handlePrev}>arrow_back_ios</span>
//           <span class="material-symbols-outlined next" onClick={handleNext}>arrow_forward_ios</span>
//         </div>
//       </div>
     
//   </section>
  

//       </>
//     )
//   }
  
//   export default Test;
  
  
  

function Test() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePageClick = (index) => {
    setActiveIndex(index);
  }


  const handleHelpColumnClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
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
        
        {/* Zawartości do przełączania */}
        {activeIndex === 0 && (
          <div className="list-item">
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
          </div>
        )}
        
        <div className="pagination">
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

    </>
  )
}


export default Test;