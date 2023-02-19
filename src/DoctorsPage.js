import React from 'react'
import DoctorsHeader from './MyComponents/DoctorsHeader.js';
import './CSSFiles/DoctorsBody.css'
import SideProfile from './MyComponents/SideProfile'
import DoctorsDashboard from './MyComponents/DoctorsDashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './MyComponents/Profile'
import PatientsList from './MyComponents/PatientsList'
import Inventory from './MyComponents/Inventory'
import PatientsHistory from './MyComponents/PatientsHistory'
 function DoctorsPage() {
  return (
    <>
       <BrowserRouter>
       <DoctorsHeader/>
        <div className="doctorsBody">
          <SideProfile/>
          <div className="playgroundSection">
          <Routes> 
          <Route path="/" element={ <DoctorsDashboard/> } />
          <Route path="/profile" element={ <Profile/> } />
          <Route path="/patientsList" element={ <PatientsList/> } />
          <Route path="/inventory" element={ <Inventory/> } />
          <Route path="/patientsHistory" element={ <PatientsHistory/> } />
          </Routes>
          </div>
        </div>
        </BrowserRouter>
    </>
  )
}
export default DoctorsPage;

{/*
profile update
check patients details
track ambulance
track inventory~Request Stock
add new record
update availability
*/}
