import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Generals from './Generals.jsx'
import ResumeTemplate from './ResumeTemplate.jsx'
import Introduction from './Introduction.jsx'
import Clock from "./Clock.jsx";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    linkedin: '',
    github: '',
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // Handler to add education entry
  const addEducation = (edu) => {
    setEducation([...education, edu]);
  };

  // Handler to add experience entry
  const addExperience = (exp) => {
    setExperience([...experience, exp]);
  };

  return (
    <>
      <div className="flex justify-center mx-auto">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="flex justify-center mx-auto bg-blue-600">Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Introduction />
      <Generals
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        education={education}
        addEducation={addEducation}
        experience={experience}
        addExperience={addExperience}
      />
      <ResumeTemplate
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
      <Clock />
      {/* ResumeTemplate will be added here later */}
    </>
  )
}

export default App
