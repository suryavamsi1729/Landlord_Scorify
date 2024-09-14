import React,{useState,useEffect} from 'react';
import './EPC.css';
import api from '../api';
export default function PEPCRTableComp(){
  
    const [data,setData]=useState([]);
    useEffect(()=>{
      const fetchdata=async()=>{
        try{
          const res = await api.get('landlord/dashboard/');
          const pid = res.data.properties[0].property[0].id;
          console.log(pid);
          const response = await api.get(`landlords/epc/reports/${pid}`);
         
        //    console.log(response.data);
           setData(response.data);
        }catch(err){
            console.log("Error while fetching the data",err);
        }
      } 
      fetchdata();
    },[])

    function convertDateFormat(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    return(
        <>
            <table className='EPCTable'>
                <thead>
                    <tr className='d-flex flex-row justify-content-center align-items-center'>
                        <th className='ReportDateCol d-flex flex-row justify-content-between align-items-center col-head'>Report Date
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8"/>
                            </svg>
                        </th>
                        <th className='Reportcol col-head d-flex flex-row align-items-center'>Report</th>
                        <th className='EERcol col-head p-0'>
                            <div className='w-100 h-100 d-flex flex-column'>
                                <div className='EERrow-1 col-head'>EER</div>
                                <div className='EERrow-2 d-flex flex-row'>
                                    <div className='EERrow-itm1 col-head w-50 h-100'>
                                        current
                                    </div>
                                    <div className='EERrow-itm2 col-head w-50 h-100'>
                                        current
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className='Actioncol col-head d-flex flex-row align-items-center'>Action</th>
                    </tr>
                </thead>
             
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index} className='w-100 d-flex flex-row'>
                                <td className='datacol'>{convertDateFormat(item.report_date)}</td>
                                <td className='datacol'>{item.report_description}</td>
                                <td className='datacol'>{item.current_epc}</td>
                                <td className='datacol'>{item.potential_epc}</td>
                                <td className='datacol d-flex flex-row justify-content-center gap-2'>
                                    <a href={item.view_document} target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
                                        <svg className="Icon" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6344 7.54418C11.6344 8.99918 10.4544 10.1783 8.9994 10.1783C7.5444 10.1783 6.36523 8.99918 6.36523 7.54418C6.36523 6.08835 7.5444 4.90918 8.9994 4.90918C10.4544 4.90918 11.6344 6.08835 11.6344 7.54418Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99817 13.629C12.1715 13.629 15.074 11.3473 16.7082 7.54398C15.074 3.74065 12.1715 1.45898 8.99817 1.45898H9.0015C5.82817 1.45898 2.92567 3.74065 1.2915 7.54398C2.92567 11.3473 5.82817 13.629 9.0015 13.629H8.99817Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={item.download_document} download style={{cursor:"pointer"}}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1019 13.3635L10.1019 3.32935" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5322 10.9238L10.1022 13.3638L7.67223 10.9238" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.9626 7.27344H14.7401C16.4359 7.27344 17.8101 8.6476 17.8101 10.3443V14.4143C17.8101 16.1059 16.4392 17.4768 14.7476 17.4768H5.46423C3.76839 17.4768 2.39339 16.1018 2.39339 14.4059L2.39339 10.3351C2.39339 8.64427 3.76506 7.27344 5.45589 7.27344L6.24089 7.27344" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className='no-data-message'>No Data Available</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </>
    );
}