import {React,useContext} from "react";
import '../Common/InspectionInventory.css';
import { MainContext } from "../../Context/MainContext";
export default function REPCRows({data}){
    const {dispatch} = useContext(MainContext);
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };  
    const color = (col)=>{
        switch(col){
            case "A":
                return {
                    backgroundColor:"#F0FDF4",
                    borderColor: "#16A34A",
                    color:  "#16A34A"
                }
            case 'B':
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
            case "C":
                return {
                    backgroundColor:"#FAFAFA",
                    borderColor: "#52525B",
                    color: "#52525B"
                }
            case "Arranging Access":
                return {
                    backgroundColor:"#EDF4FF",
                    borderColor: "#5A74FA",
                    color: "#5A74FA"
                }
            default :
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
        }
    }
    return(
        <>
        <tr className="w-100 d-flex flex-row">
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
            {<span onClick={
                    ()=>{
                        dispatch({
                            type:"popup",
                            payload:{
                                popupData:data,
                                popupStae: true
                            }
                        });
                    }
                } style={{cursor:'pointer'}}>{` ${data.PropertiesAdderess}`}</span>}
            </td>
            <td className="RowItm">
                <span className="ChipTenancy" style={color(data.Document)}>{` ${data.Document}`}</span>
            </td>
            <td className="RowItm">
                <span className="ChipTenancy" style={color(data.CurrentRating)}>{` ${data.CurrentRating}`}</span>
            </td>
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
                {` ${data.Date}`}
            </td>
            <td className="RowItm d-flex flex-row justify-content-center align-items-center gap-2">
                <svg onClick={() => openInNewTab('/doc.pdf')} className="Icon"  width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6344 7.54418C11.6344 8.99918 10.4544 10.1783 8.9994 10.1783C7.5444 10.1783 6.36523 8.99918 6.36523 7.54418C6.36523 6.08835 7.5444 4.90918 8.9994 4.90918C10.4544 4.90918 11.6344 6.08835 11.6344 7.54418Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99817 13.629C12.1715 13.629 15.074 11.3473 16.7082 7.54398C15.074 3.74065 12.1715 1.45898 8.99817 1.45898H9.0015C5.82817 1.45898 2.92567 3.74065 1.2915 7.54398C2.92567 11.3473 5.82817 13.629 9.0015 13.629H8.99817Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1019 13.3635L10.1019 3.32935" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5322 10.9238L10.1022 13.3638L7.67223 10.9238" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.9626 7.27344H14.7401C16.4359 7.27344 17.8101 8.6476 17.8101 10.3443V14.4143C17.8101 16.1059 16.4392 17.4768 14.7476 17.4768H5.46423C3.76839 17.4768 2.39339 16.1018 2.39339 14.4059L2.39339 10.3351C2.39339 8.64427 3.76506 7.27344 5.45589 7.27344L6.24089 7.27344" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </td>
        </tr>
        </>
    )
}