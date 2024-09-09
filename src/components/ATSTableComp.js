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
                <td className="NameVal">{`12/05/2024`}</td>
            </tr>
            <tr>
                <td className="Name">End Date</td>
                <td className="NameVal">{`25/05/2024`}</td>
            </tr>
            <tr>
                <td className="Name">Rent Amount</td>
                <td className="NameVal">{`$ 2200`}</td>
            </tr>
            <tr>
                <td className="Name">Deposit</td>
                <td className="NameVal">{`$ 2000`}</td>
            </tr>
        </table>
        </>
    );
}