import React from "react";
import './TenantProfileSectionStyle.css';
export default function ATSTableComp(){
    return (
        <>
        <table className="TableTanent rounded-corners">
            <tr>
                <td className="header" colSpan={2}>Term of Tenancy</td>
            </tr>
            <tr>
                <td className="Name">Start Date</td>
                <td className="NameVal">{``}</td>
            </tr>
            <tr>
                <td className="Name">End Date</td>
                <td className="NameVal">{``}</td>
            </tr>
            <tr>
                <td className="Name">Rent Amount</td>
                {/* <td className="NameVal">{`$ 2200`}</td> */}
                <td className="NameVal">{`$`}</td>
            </tr>
            <tr>
                <td className="Name">Deposit</td>
                <td className="NameVal">{`$`}</td>
            </tr>
        </table>
        </>
    );
}