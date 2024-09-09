import React from "react";
import './OpenRepairsSection.css';
export default function ORTableRow({data,column,name}){
    const color = (col)=>{
        switch(col){
            case "Completed":
                return {
                    backgroundColor:"#F0FDF4",
                    borderColor: "#16A34A",
                    color:  "#16A34A"
                }
            case "Open":
                return {
                    backgroundColor:"#FFFBEB",
                    borderColor: "#F59E0B",
                    color:  "#F59E0B"
                }
            default :
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
            }
            
    }
    const coldata = ()=>{
        switch (name) {
            case "table1":
                return data.RepairCost;
            case "table2":
                return (
                    <>
                    <div className="w-100 h-100 d-flex flex-row align-items-center gap-1">
                        <img alt="img" style={{width: '30px',height: '30px',borderRadius: '6px'}} src={'/popupimg.jpg'}/>
                        <img alt="img" style={{width: '30px',height: '30px',borderRadius: '6px'}} src={'/popupimg.jpg'}/>
                        <img alt="img" style={{width: '30px',height: '30px',borderRadius: '6px'}} src={'/popupimg.jpg'}/>
                        <img alt="img" style={{width: '30px',height: '30px',borderRadius: '6px'}} src={'/popupimg.jpg'}/>
                    </div>
                    </>
                );
            default:
                return data.RepairCost
        }
    }
    return(
        <>
        <tr className="tableRowContainer d-flex flex-row w-100">
            <td className={`${column[0].className} columndata d-flex flex-row align-items-center`}>
                {data.RepairDetails}
            </td>
            <td className={`${column[1].className} columndata d-flex flex-row align-items-center`}>
                {data.CompletionDate}
            </td>
            <td className={`${column[2].className} SatusColumn columndata d-flex flex-row align-items-center`}>
                <div className="StatusChip" style={color(data.Status)}>
                    {data.Status}
                </div>
            </td>
            <td className={`${column[3].className} columndata d-flex flex-row align-items-center`}>
                {data.CompletionReport}
            </td>
            <td className={`${column[4].className} columndata d-flex flex-row align-items-center justify-content-end`}>
                {coldata()}
            </td>
            <td className={`ActionColumn columndata d-flex flex-row align-items-center`}>
                <a href={data.report} target="_blank">
                <svg className="Icon" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6344 7.54418C11.6344 8.99918 10.4544 10.1783 8.9994 10.1783C7.5444 10.1783 6.36523 8.99918 6.36523 7.54418C6.36523 6.08835 7.5444 4.90918 8.9994 4.90918C10.4544 4.90918 11.6344 6.08835 11.6344 7.54418Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.99817 13.629C12.1715 13.629 15.074 11.3473 16.7082 7.54398C15.074 3.74065 12.1715 1.45898 8.99817 1.45898H9.0015C5.82817 1.45898 2.92567 3.74065 1.2915 7.54398C2.92567 11.3473 5.82817 13.629 9.0015 13.629H8.99817Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </a>
            </td>
        </tr>
        </>
    );
}