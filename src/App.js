import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Properties from './AgentComponents/Properties/Properties';
import MaintenanceandRepair from './AgentComponents/MaintenanceandRepair/MaintenanceandRepair';
import MainDashBordComp from './MainDashBord/MainDashBoard';
import SvgCircularProgressbar from './AgentComponents/SvgCircularProgressbar';
import Report from './AgentComponents/Report/ReportEPCTableContainer';
import Inspection from './AgentComponents/Inspection/Inspection';
import MultiColorProgressBar from './AgentComponents/CircularProgressMUlTI';
import ReportMainContent from './AgentComponents/Report/ReportsMainContent';
import RadialGauge from './AgentComponents/GuageEle';
function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<MainDashBordComp/>}>
         {/* <Route path="dashboard" element={<MultiColorProgressBar aRating={5} bRating={45} cRating={100} dRating={10} />}/> */}
         {/* <Route path="dashboard" element={<MaintenanceandRepair/>}/> */}
         {/* <Route path="dashboard" element={<SvgCircularProgressbar/>}/> */}
         <Route path="dashboard" element={<RadialGauge value={0} lable={'Good'}/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
