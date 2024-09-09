import {React} from 'react'
import {MianProvider} from "../Context/MainContext";
import SideBarComp from "../MainDashBord/NavBar/SideBarComp"
import './Agent.css'
import {Dashboard} from '../AgentComponents/Dashboard/Dashboard'
const Agent = () => {
  return (
<>
   
   <MianProvider>
    <div className="MainDashBordContainer">
        <div className="MDBCWrapper">
        
        </div>
    </div>

    </MianProvider> 
</>
  )
}

export default Agent