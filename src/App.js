import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero"
import Education from "./Components/Education/Education";
import More from "./Components/More/More"
import Experience from "./Components/Experience/Experience"
import About from "./Components/About/About"
import { CV } from "./CV/Cs";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <div>
        <Hero hero={hero} />
       <About hero={hero} />
        <div className="divider">      
        </div>
           </div>
      <div>
        <div className="divider">
          
          
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Educación
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
          </div>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      <br />
      <br />
    </div>
  );
}

export default App;


