import {React,useState,useEffect} from "react";
import MaintainanceTimeline from "../MaintainanceTimeline/MaintainanceTimeline";
import AllTablesSection from "../Properties/AllTablesSections";
import MROpenRepairTable from "./MROpenRepairTable";
import api from "../../api";
export default function ORTableContainer(){
    const [tableData,setTableData] = useState([]);
    const [tableSize,SetTableSize] = useState(0);

    // const [tableData,setTableData] = useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await api.get('agent/open-repairs/');
                const property=response.data.repair_data;
                const repairdata=property.map(data=>({
                id:data.property_id,
                PropertiesAdderess:data.property_address,
                FloorPlan:'',
                Description: data.description,
                RepairStatus: data.status,
                }));
                setTableData(repairdata);
                SetTableSize(repairdata.length);
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
        const datapass =  searchData==''?tableData:SearchTableData;
        const Size = searchData==''?tableSize:SearchTableDataSize;
        if(range<=0){
            return datapass.slice(0,10);
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
            return  (row.PropertiesAdderess?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.FloorPlan?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Description?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.RepairStatus?.toString().toLowerCase().includes(searchState.toString().toLowerCase())
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
            <MaintainanceTimeline />
            <AllTablesSection tablename={'propertytable'} pageSize={5} data={data} tableSize={searchData==""?tableSize:SearchTableDataSize} setSearchData={setSearchData} >
                <MROpenRepairTable/>
            </AllTablesSection>
        </>
    );
}