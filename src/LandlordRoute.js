import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./AuthNew/Auth/LoginPage";
import { MianProvider } from "../src/Context/MainContext";
import MainDashBordComp from './MainDashBord/MainDashBoard';
import MainContentSection from './MainDashBord/MainDashBordBodyContent/MainContentSection';
import PropertytimeLineBodyContent from './components/PropertytimeLineBodyContent';
import InspectionInventory from './components/InspectionInventorySection';
import MouldandHumidityComp from './components/MouldandHumidityComp';
import TenantProfileSectionComp from './components/TenantProfileSection';
import OpenRepairsSection from './components/OpenRepairsSection';
import RegularMaintenance from './components/RegularMaintainens';
import FloarMapPhotosSection from './components/FloarMapPhotosSection';
import LivingRoomSection from './components/LivingRoomSection';
import AgentsProfileSection from './components/AgentsProfileSection';
import EPCSection from './components/EPCSection';
import RiskAssessmentSection from './components/RiskAssessmentSection';
import RiskDowload from './components/RiskDowload';
import ApplienceSection from './components/ApplienceSection';
import OvenSection from './components/OvenSection';
import HeatingSystem from './components/HeatingSystem';
import Calendar from './AgentComponents/Calendar/Calendar';
import Properties from './AgentComponents/Properties/Properties';
import MaintenanceandRepair from './AgentComponents/MaintenanceandRepair/MaintenanceandRepair';
import ReportMainContent from './AgentComponents/Report/ReportsMainContent';
import Inspection from './AgentComponents/Inspection/Inspection';
import ReportEPCTableContainer from './AgentComponents/Report/ReportEPCTableContainer';
import RTISITableContainer from './AgentComponents/Report/RTSITableContainer';
import PrivateRoute from './PrivateRoute'; 
import ProfileScreen from "./AuthNew/Auth/Profile";
import OtpScreen from './AuthNew/Auth/OtpScreen';
import ForgotPasswordPage from "./AuthNew/Auth/ForgotPasswordPage";
import UploadScreen from "./AuthNew/Auth/UploadScreen";
import AddressLookup from './AuthNew/Auth/zipcode';
import Invite from "./components/Invite";

export default function LandLordNewRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>} />
                <Route path="/login" element={<LoginPage/>} /> 
                <Route path="/zipcode" element={<AddressLookup/>}/>
                <Route path="/signup" element={<MianProvider><ProfileScreen/></MianProvider>}/>
                <Route path="/upload" element={<UploadScreen/>}/>
                <Route path="/verifyotp" element={<MianProvider><OtpScreen/></MianProvider>}/>
                <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
                <Route path="/dashboard" element={<PrivateRoute element={<MainDashBordComp><MainContentSection/></MainDashBordComp>}/>}/>
                <Route path="/propertytimeline" element={<PrivateRoute element={<MainDashBordComp><PropertytimeLineBodyContent /></MainDashBordComp>} />} />
                <Route path='/dashboard/inspections&inventory' element={<PrivateRoute element={<MainDashBordComp><InspectionInventory /></MainDashBordComp>} />} />
                <Route path="/dashboard/moudleandhumidity" element={<PrivateRoute element={<MainDashBordComp><MouldandHumidityComp /></MainDashBordComp>} />} />
                <Route path="/dashboard/tenantsprofile" element={<PrivateRoute element={<MainDashBordComp><TenantProfileSectionComp /></MainDashBordComp>} />} />
                <Route path="/dashboard/openrepair" element={<PrivateRoute element={<MainDashBordComp><OpenRepairsSection/></MainDashBordComp>} />} />
                <Route path="/dashboard/regularmaintenance" element={<PrivateRoute element={<MainDashBordComp><RegularMaintenance /></MainDashBordComp>} />} />
                <Route path="/dashboard/floarmapandphotos" element={<PrivateRoute element={<MainDashBordComp><FloarMapPhotosSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/floarmapandphotos/:itm" element={<PrivateRoute element={<MainDashBordComp><LivingRoomSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/agentsprofile" element={<PrivateRoute element={<MainDashBordComp><AgentsProfileSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/epc" element={<PrivateRoute element={<MainDashBordComp><EPCSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/riskassessment" element={<PrivateRoute element={<MainDashBordComp><RiskAssessmentSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/riskassessment/download" element={<PrivateRoute element={<MainDashBordComp><RiskDowload /></MainDashBordComp>} />} />
                <Route path="/dashboard/applience" element={<PrivateRoute element={<MainDashBordComp><ApplienceSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/applience/:itm" element={<PrivateRoute element={<MainDashBordComp><OvenSection /></MainDashBordComp>} />} />
                <Route path="/dashboard/heatingsystem" element={<PrivateRoute element={<MainDashBordComp><HeatingSystem /></MainDashBordComp>} />} />
                <Route path='/calendar' element={<PrivateRoute element={<MainDashBordComp><Calendar /></MainDashBordComp>} />} />
                <Route path='/invite' element={<PrivateRoute element={<MainDashBordComp><Invite/></MainDashBordComp>} />} />
                <Route path='/property' element={<PrivateRoute element={<MainDashBordComp><Properties /></MainDashBordComp>} />} />
                <Route path='/maintenance' element={<PrivateRoute element={<MainDashBordComp><MaintenanceandRepair /></MainDashBordComp>} />} />
                <Route path='/reports' element={<PrivateRoute element={<MainDashBordComp><ReportMainContent /></MainDashBordComp>} />} />
                <Route path='/reports/epc' element={<PrivateRoute element={<MainDashBordComp><ReportEPCTableContainer /></MainDashBordComp>} />} />
                <Route path='/reports/tenantself-inspections' element={<PrivateRoute element={<MainDashBordComp><RTISITableContainer /></MainDashBordComp>} />} />
                <Route path='/reports/inventory' element={<PrivateRoute element={<MainDashBordComp><RTISITableContainer /></MainDashBordComp>} />} />
                <Route path='/reports/check-out' element={<PrivateRoute element={<MainDashBordComp><RTISITableContainer /></MainDashBordComp>} />} />
                <Route path='/inspections' element={<PrivateRoute element={<MainDashBordComp><Inspection /></MainDashBordComp>} />} />
            </Routes>
        </BrowserRouter>
    );
}
