import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import Generals from './Generals.jsx'
import Clock from "./Clock.jsx";
import ResumeTemplate from "./ResumeTemplate.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Introduction />
    <Generals />
    <ResumeTemplate />
    <Clock />
  </StrictMode>,
)
