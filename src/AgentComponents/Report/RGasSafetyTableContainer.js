import {React,useState,useEffect} from "react";
import './Report.css';
import AllTablesSection from "../Properties/AllTablesSections";
import MaintainanceTimeline from "../MaintainanceTimeline/MaintainanceTimeline";
import RGSTable from "./RGSTable";
import api from "../../api";
export default function RGasSafetyTableContainer(){
    // const [tableData,setTableData] = useState(
    //     [
    //         {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Fair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Good',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          }, 
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Excellent',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Repair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Repair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Good',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          }, 
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Excellent',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Fair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Excellent',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Repair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Repair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Good',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          }, 
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Excellent',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //          {
    //              'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
    //              'Document':'Self Inspection',
    //              'Result': 'Fair',
    //              'CreateBy':'khadijah ali',
    //              'Date': '12/05/2024',
    //          },
    //      ]
    // );

    const [tableData,setTableData] = useState([]);
    const [tableSize,SetTableSize] = useState(0);
    
    function ConvertDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${month}/${day}/${year}`;
    }

   useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await api.get('agent/gas-safety-certificate/');
            const property=response.data;
            const repairdata=property.map(data=>({
            id:data.property_id,
            PropertiesAdderess:data.property.address,
            'Document':'Self Inspection',
            // img:data.profile_photo,
            Result:data.result,
            //  Date: ConvertDate(data.date),
            // CreateBy:data.tenant_name,
            Date:ConvertDate(data.report_date),
            ExpiryDate:ConvertDate(data.due_date),
            Documenturl:data.document,
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
            return  (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Document.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Result?.toLowerCase().includes(searchState.toString().toLowerCase())||
            row.CreateBy.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
            row.Date.toLowerCase().includes(searchState.toString().toLowerCase())
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
                        <MaintainanceTimeline/>
                        <AllTablesSection className={'ReportEPCTAbleContent'} data={data} tableSize={searchData==""?tableSize:SearchTableDataSize} setSearchData={setSearchData}  pageSize={10}>
                            <RGSTable/>
                        </AllTablesSection> 
                    </div>
                </div>
            </div>
        </div>
    );
}