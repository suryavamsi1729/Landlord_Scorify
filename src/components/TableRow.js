import {React,useContext} from "react";
import './InspectionInventory.css';
import img from './svg/Avatar.png';
import { MainContext } from "../Context/MainContext.js";
export default function TableRow({data}){
    const {dispatch} = useContext(MainContext);
    const color = (col)=>{
        switch(col){
            case "Check In Report":
                return {
                    backgroundColor:"#F0FDF4",
                    borderColor: "#16A34A",
                    color:  "#16A34A"
                }
            case "Inventory Report":
                return {
                    backgroundColor:"#FFFBEB",
                    borderColor: "#F59E0B",
                    color:  "#F59E0B"
                }
            case "Routine Inspection":
                return {
                    backgroundColor:"#FAFAFA",
                    borderColor: "#52525B",
                    color: "#52525B"
                }
            case "Mid - Term Inspection":
                return {
                    backgroundColor:"#EDF4FF",
                    borderColor: "#5A74FA",
                    color: "#5A74FA"
                }
            case "Check Out Report":
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
            default :
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
        }
    }

    const handleDownload=(fileUrl)=>{
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };

    return(
        <>
        <tr className="w-100 d-flex flex-row">
            <td className="RowItm DocumentItm ">
                <div className="DocumentChip d-flex  flex-row gap-2" >
                    <div className="Icon">
                        <svg className="SvgIcon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0967 12.0194H5.08008" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.0967 8.53068H5.08008" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.37616 5.04997H5.08032" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2572 0.791504C11.2572 0.791504 4.85965 0.794837 4.84965 0.794837C2.54965 0.809004 1.12549 2.32234 1.12549 4.63067V12.294C1.12549 14.614 2.56049 16.1332 4.88049 16.1332C4.88049 16.1332 11.2772 16.1307 11.288 16.1307C13.588 16.1165 15.013 14.6023 15.013 12.294V4.63067C15.013 2.31067 13.5772 0.791504 11.2572 0.791504Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="DocumentId">{`Document ${data.document.id}`}</span>
                </div>
            </td>
            <td className="RowItm DateItm">
                <p className="DateText m-0">{data.date}</p>
            </td>
            <td className="RowItm DateType">
                <div className="DocumentChip" style={color(data.document.type)}>
                    <p className="DocumentTypeText m-0">{data.document.type}</p>
                </div>
            </td>
            <td className="RowItm DateTitle">
                <p className="DocumentTitleText m-0">{data.document.title}</p>
            </td>
            <td className="RowItm creator d-flex flex-row justify-content-start align-items-center gap-2">
                <img alt="img" className="profileimg" src={data.cretor.profile_photo}/>
                <p className="creatorText m-0">{data.cretor.name}</p>
            </td>
            <td className="RowItm DateItm">   
                <p className="DateText m-0">{data.expiary_date}</p>
            </td>

            <td className="RowItm Action d-flex flex-row justify-content-center align-items-center gap-2">

                    <svg className="Icon" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleView(data.document.file)} style={{cursor:'pointer'}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6344 7.54418C11.6344 8.99918 10.4544 10.1783 8.9994 10.1783C7.5444 10.1783 6.36523 8.99918 6.36523 7.54418C6.36523 6.08835 7.5444 4.90918 8.9994 4.90918C10.4544 4.90918 11.6344 6.08835 11.6344 7.54418Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99817 13.629C12.1715 13.629 15.074 11.3473 16.7082 7.54398C15.074 3.74065 12.1715 1.45898 8.99817 1.45898H9.0015C5.82817 1.45898 2.92567 3.74065 1.2915 7.54398C2.92567 11.3473 5.82817 13.629 9.0015 13.629H8.99817Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
               
               
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"    onClick={() => handleDownload(data.document.file)}  style={{ cursor: 'pointer' }}>
                        <path d="M10.1019 13.3635L10.1019 3.32935" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5322 10.9238L10.1022 13.3638L7.67223 10.9238" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.9626 7.27344H14.7401C16.4359 7.27344 17.8101 8.6476 17.8101 10.3443V14.4143C17.8101 16.1059 16.4392 17.4768 14.7476 17.4768H5.46423C3.76839 17.4768 2.39339 16.1018 2.39339 14.4059L2.39339 10.3351C2.39339 8.64427 3.76506 7.27344 5.45589 7.27344L6.24089 7.27344" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
               
            </td>

        </tr>
        </>
    );
}