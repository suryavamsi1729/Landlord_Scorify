import {React,useState,useEffect} from "react";
import './Report.css';
import AllTablesSection from "../Properties/AllTablesSections";
import { REPCdata,REPCsizeOfData } from "./REPCData";
import ReportEPCTable from "./ReportEPCTable";
import { ASITData,ASITsizeOfData } from "./ASITData";
import TentSelfInspectionTable from "./TentSelfInspectionTable";
import ReportMaintainanceTimeline from "../MaintainanceTimeline/ReportMaintainanceTimeLine";
export default function ReportEPCTableContainer(){
    const [tableData,setTableData] = useState(
        [
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
            },
            {
                'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
                'Document':'EPC',
                'CurrentRating': 'A',
                'Date': '12/05/2024',
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
            return  (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Document.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.CurrentRating?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Date.toString().toLowerCase().includes(searchState.toString().toLowerCase())
            )
        });
        return filteredData;
    }
    
    useEffect(()=>{
        setSearchTableData(PTsearchingData(searchData));
        setSearchTableDataSize(SearchTableData.length);
    },[searchData]);
    return(
        <div className="ReportSection">
            <div className="Container-fluid p-0">
                <div class="row m-0">
                    <div className="col-12 p-0">
                    <ReportMaintainanceTimeline/>
                        <AllTablesSection className={'ReportEPCTAbleContent'} data={data} tableSize={searchData==""?tableSize:SearchTableDataSize} setSearchData={setSearchData}  pageSize={10}>
                            <ReportEPCTable/>
                        </AllTablesSection>
                    </div>
                </div>
            </div>
        </div>
    );
}