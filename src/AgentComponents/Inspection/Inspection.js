import {React,useState,useEffect} from "react";
import './Inspection.css';
import AllTablesSection from "../Properties/AllTablesSections";
import InspectionAgentTable from "./InspectionAgentTable";
import { InspectionTAData,ITAsizeOfData } from "./InspectionTAData";
export default function Inspection(){
    const [ITApageStart , ITAsetPageStart] = useState(0);
    const [tableData,setTableData] = useState(
        [
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'FloorPlan':'2Bed',
                'Comments': 'Lorem ipsum dolor sit amet consectetur.',
                'InspectionScore': 640,
                'Occupancy': '5 PPL',
                'NextInspectionDate':'12/05/2024'
            },
            
        
        ]
    );
    const [filterData,setFilterData]=useState([]);
    const [tableSize,SetTableSize] = useState(tableData.length);
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
            return (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.FloorPlan.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Comments?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.InspectionScore.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Occupancy.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.NextInspectionDate.toLowerCase().includes(searchState.toString().toLowerCase())
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
            <div className="SectionInspection">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-4 p-0 pe-2">
                            <div className="InspectionCards d-flex flex-column p-3 gap-3"  >
                                <h1 className="Heading m-0">Regular Maintenance</h1>
                                <div className="ContentSection d-flex flex-column justify-content-center align-item-center gap-2">
                                    <p className="Value m-0">16</p>
                                    <p className="Text m-0">Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 p-0 ps-1 pe-1">
                            <div className="InspectionCards d-flex flex-column p-3 gap-3"  >
                                <h1 className="Heading m-0">Regular Maintenance</h1>
                                <div className="ContentSection d-flex flex-column justify-content-center align-item-center gap-2">
                                    <p className="Value m-0">16</p>
                                    <p className="Text m-0">Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 p-0 ps-2">
                            <div className="InspectionCards d-flex flex-column p-3 gap-3"  >
                                <h1 className="Heading m-0">Regular Maintenance</h1>
                                <div className="ContentSection d-flex flex-column justify-content-center align-item-center gap-2">
                                    <p className="Value m-0">16</p>
                                    <p className="Text m-0">Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 px-0 py-3">
                            <div className="TableSectionInspection p-0">
                                <AllTablesSection pageSize={5} data={data} tableSize={searchData==""?tableSize:SearchTableDataSize} setSearchData={setSearchData}>
                                    <InspectionAgentTable/>
                                </AllTablesSection>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}