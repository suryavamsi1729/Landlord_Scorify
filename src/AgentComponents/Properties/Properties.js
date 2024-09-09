import {React,useEffect,useState} from "react";
import './Properties.css';
import { CardContainer } from "./PropertiesCount";
import AllTablesSection from "./AllTablesSections";
import PropertyTable from "./PropertyTable";
import api from "../../api";
// import { data,sizeOfData, dataobjArray } from "./PropertiesData";
export default  function Properties(){

    const [tableData,setTableData] = useState([]);
    const [tableSize,SetTableSize] = useState(0);
    const [nop,SetNop]=useState('');
    const [orc,Setorc]=useState('');
    const [omc,Setomc]=useState(''); 
    
    useEffect(()=>{
        const fetchData=async()=>{
            try{
        
               const response=await api.get('agent/property/');
               const properties = response.data.properties_details;
              
               const updatedTableData = properties.map(property => ({
                PropertiesAdderess: property.address,
                TimeinProperty: property.house_age ? `${property.house_age} Years` : 'N/A',
                PropScore: property.score,
                complianceLevel: property.epc_status.charAt(0).toUpperCase() + property.epc_status.slice(1), 
                OpenRepairs: property.open_repair_count,
                InspectionsDue: property.inspection_repair_count
              }));
              setTableData(updatedTableData);
              const len = updatedTableData.length;
              SetTableSize(len);
              SetNop(response.data.number_of_properties);
              Setorc(response.data.open_repairs_count);
              Setomc(response.data.open_maintenance_count);
               
            }catch(err){
               console.log("Error while fetching the data",err);    
            }
          
         }
        fetchData();
    },[]);

    const [filterData,setFilterData]=useState([]);
    const [searchData,setSearchData] = useState('');
    const [SearchTableData,setSearchTableData]= useState([]);
    const [SearchTableDataSize,setSearchTableDataSize]= useState(0);
    const data = (start,range)=>{
        console.log(tableData);
        console.log(tableSize);
        const datapass = (searchData==='')?tableData:SearchTableData;
        const Size = (searchData==='')?tableSize:SearchTableDataSize;
        if(range<=0){
            return datapass.slice(0,2);
        }
        else if(range>Size){
            
            return datapass.slice(start,Size);
        }
        else{
            return datapass.slice(start, range);
        }
    }
    const PTsearchingData= (searchState)=>{
        const filteredData = tableData.filter((row) =>{
            return (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.Tenancy.toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.TimeinProperty?.toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.PropScore.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.complianceLevel.toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.OpenRepairs.toLowerCase().includes(searchState.toString().toLowerCase())||
                    row.InspectionsDue.toLowerCase().includes(searchState.toString().toLowerCase())
                )
        });
        return filteredData;
    }
    

  
    useEffect(()=>{
        setSearchTableData(PTsearchingData(searchData));
        setSearchTableDataSize(SearchTableData.length);
        
    },[searchData]);
    return(
        <>
            <div className="PropertiesSection">
                <div className="container-fluid p-0">
                    <div className="row m-0 g-3" id="TopSection">
                        <div className="col-12 col-md-6 col-lg-4 ps-0 pe-2 " id="rowcolumns">
                            <CardContainer className={'justify-content-around'}>
                                <h1 className="Heading m-0">Number of properties</h1>
                                <p className="Value m-0">{nop}</p>
                                <div className="ProgressContainer d-flex flex-column gap-2">
                                    <div className="LinerarPgrogress">
                                        <div className="Loader" style={{width:`${nop}%`}}>
                                        </div>
                                    </div>
                                    <div className="Labels d-flex flex-row align-items-center gap-2">
                                        <div className="Dot Active">

                                        </div>
                                        <p className="Text m-0">
                                            Occupied
                                        </p>
                                        <p className="Value m-0">
                                            {}
                                        </p>
                                    </div>
                                    <div className="Labels d-flex flex-row align-items-center gap-2">
                                        <div className="Dot">
                                        </div>
                                        <p className="Text m-0">
                                            Vacant
                                        </p>
                                        <p className="Value m-0">
                                            {}
                                        </p>
                                    </div>
                                </div>
                            </CardContainer>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 ps-2 pe-2" id="rowcolumns">
                            <CardContainer className={"OpenRepairRegularMaintenance"}>
                                <h1 className="Heading m-0">Open Repairs/Regular Maintenance</h1>
                                <div className="d-flex flex-row OpenRepairRegularMaintenanceContent">
                                    <div className="Cards d-flex flex-column justify-content-center align-items-center px-3 py-3">
                                        <h1 className="Value m-0">{orc}</h1>
                                        <p className="Text m-0">Open
                                        Repairs</p>
                                    </div>
                                    <div className="Cards d-flex flex-column justify-content-center align-items-center px-3 py-3">
                                        <h1 className="Value m-0">{omc}</h1>
                                        <p className="Text m-0">Regular Maintenance</p>
                                    </div>
                                </div>
                            </CardContainer>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-0 ps-lg-2 pe-0  " id="rowcolumns">
                            <CardContainer className={"PendingReports w-100 h-100"}>
                                <h1 className="Heading m-0">Pending Reports</h1>
                                <div className="d-flex flex-row OpenRepairRegularMaintenanceContent">
                                    <div className="Cards d-flex flex-column justify-content-center align-items-center px-2 py-3">
                                        <h1 className="Value m-0">{}</h1>
                                        <p className="Text m-0">Gas Safety
                                        </p>
                                    </div>
                                    <div className="Cards d-flex flex-column justify-content-center align-items-center px-2 py-3">
                                        <h1 className="Value m-0">{}</h1>
                                        <p className="Text m-0">EPC
                                        </p>
                                    </div>
                                    <div className="Cards d-flex flex-column justify-content-center align-items-center px-2 py-3">
                                        <h1 className="Value m-0">{}</h1>
                                        <p className="Text m-0">EICR
                                        </p>
                                    </div>
                                </div>
                            </CardContainer>
                        </div>
                        <div className="col-12 p-0">
                            <AllTablesSection pageSize={5} data={data} tableSize={searchData==""?tableSize:SearchTableDataSize} setSearchData={setSearchData} >
                                <PropertyTable/>
                            </AllTablesSection>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}