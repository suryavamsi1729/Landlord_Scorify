import {React,useState,useEffect} from "react";
import MaintainanceTimeline from "../MaintainanceTimeline/MaintainanceTimeline";
import AllTablesSection from "../Properties/AllTablesSections";
import RegularMaintenanceTable from "./RegularMaintenanceTable";
export default function RMTableContainer(){
    const [tableData,setTableData] = useState(
        [
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 641,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'Surya',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 750,
                'Occupancy': '20 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Notes': 'Lorem ipsum dolor sit amet consectetur.',
                'PropScore': 640,
                'Occupancy': '5 PPL'
            },
        ]
    );
    const [tableSize,SetTableSize] = useState(0);
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
            row.Notes?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.PropScore?.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Occupancy?.toLowerCase().includes(searchState.toString().toLowerCase())
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
                <RegularMaintenanceTable />
            </AllTablesSection>
        </>
    );
}