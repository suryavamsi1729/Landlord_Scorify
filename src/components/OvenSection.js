import React from "react";
import './Applience.css';
export default function OvenSection(){
    return(
        <>
            <div className="OvenSection">
                <div className="container-fluid  p-0">
                    <div className="row m-0">
                        <div className="col-4">
                            <div className="ImgContainerApplience mb-3">
                                <img className="AplicationImg" alt="appImg" src={'/imgApplience.jpg'}/>
                            </div>
                            <div className="SectionImages w-100 d-flex flex-row flex-wrap gap-3 ">
                                <img className="ImgItms" alt="img" src={"/oven.jpg"}/>
                                <img className="ImgItms" alt="img" src={"/oven.jpg"}/>
                                <img className="ImgItms" alt="img" src={"/oven.jpg"}/>
                                <img className="ImgItms" alt="img" src={"/oven.jpg"}/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="AppItmcontentSection w-100 d-flex flex-column ">
                                <div className="content-text w-100 d-flex flex-column">
                                    <h1 className="heading m-0">Oven</h1>
                                    <div className="bottomText w-100 d-flex flex-row justify-content-between">
                                        <div className="rightText">
                                            <p className="textitm boldText m-0">Westinghouse WVE613S</p>
                                        </div>
                                        <div className="leftText d-flex flex-row gap-2">
                                            <p className="textitm m-0">Serial No.: <span>103TRBS42333</span></p>
                                            <p className="textitm m-0">Condition : <span>Good</span></p>
                                            <p className="textitm m-0">Warranty : <span>3 Years</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Content-tables d-flex flex-column gap-3">
                                    <h1 className="heading">
                                        Maintenance
                                    </h1>
                                    <table className="TableTanent rounded-corners">
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header d-flex flex-row justify-content-between">Name
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8"/>
                                                </svg>
                                            </td>
                                            <td className="header" >Task Type</td>
                                            <td className="header" >Frequency</td>
                                        </tr>
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Frequency</td>
                                        </tr>
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Frequency</td>
                                        </tr>
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Frequency</td>
                                        </tr>
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Frequency</td>
                                        </tr>
                                    </table>
                                    <h1 className="heading">
                                    Repair History
                                    </h1>
                                    <table className="TableTanent rounded-corners table-2">
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header d-flex flex-row justify-content-between">Name
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8"/>
                                                </svg>
                                            </td>
                                            <td className="header" >Task Type</td>
                                            <td className="header" >Frequency</td>
                                        </tr>
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext d-flex flex-row justify-content-center gap-2" >
                                                <svg className="Icon"  width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext d-flex flex-row justify-content-center gap-2" >
                                                <svg className="Icon"  width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext d-flex flex-row justify-content-center gap-2" >
                                                <svg className="Icon" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <tr className="w-100 d-flex flex-row">
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext" >Task Type</td>
                                            <td className="header datatext d-flex flex-row justify-content-center gap-2" >
                                                <svg className="Icon" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}