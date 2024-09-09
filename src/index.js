import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import LoginPage from './Auth/LoginPage';
// import PasswordSetSuccessful from './Auth/PasswordSetSuccessful';
// import Authentication from './Auth/Authentication';
// import MainContentSection from './MainDashBord/MainDashBordBodyContent/MainContentSection';
// import PropertytimeLineBodyContent from './components/PropertytimeLineBodyContent';
// import InspectionInventory from './components/InspectionInventorySection';
// import MouldandHumidityComp from './components/MouldandHumidityComp';
// import TenantProfileSectionComp from './components/TenantProfileSection';
// import OpenRepairsSection from './components/OpenRepairsSection';
// import RegularMaintenance from './components/RegularMaintainens';
// import FloarMapPhotosSection from './components/FloarMapPhotosSection';
// import LivingRoomSection from './components/LivingRoomSection';
// import AgentsProfileSection from './components/AgentsProfileSection';
// import EPCSection from './components/EPCSection';
// import RiskAssessmentSection from './components/RiskAssessmentSection';
// import RiskDowload from './components/RiskDowload';
// import ApplienceSection from './components/ApplienceSection';
// import OvenSection from './components/OvenSection';
// import HeatingSystem from './components/HeatingSystem';
// import Error from './MainDashBord/NavBar/Error';
// import { BrowserRouter , Routes ,Route } from "react-router-dom";
// import CircularProgressBar from './AgentComponents/Dashboard/ProgressBar';
// import SvgCircularProgressbar from './AgentComponents/SvgCircularProgressbar';
// //Agent components for landlord
// import Properties from './AgentComponents/Properties/Properties';
// import MaintenanceandRepair from './AgentComponents/MaintenanceandRepair/MaintenanceandRepair';
// import ReportMainContent from './AgentComponents/Report/ReportsMainContent';
// import Inspection from './AgentComponents/Inspection/Inspection';
// import ReportEPCTableContainer from './AgentComponents/Report/ReportEPCTableContainer';
// import RTISITableContainer from './AgentComponents/Report/RTSITableContainer';
// import Calendar from './AgentComponents/Calendar/Calendar';
// import App from './App';
import LandlordRoute from './LandlordRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LandlordRoute/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
