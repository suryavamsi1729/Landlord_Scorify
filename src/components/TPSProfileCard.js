import React from "react";
import "./TenantProfileSectionStyle.css"
export default function TPSprofileCard({imgUrl,data}){
    return(
        <>
            <div className="TPSProfileCard d-flex flex-column align-items-center gap-2">
                <div className="TSpProfileTopSection w-100">
                    <div className="TPSProfileCardBGProfileImg" style={{backgroundImage: imgUrl}}>
                    </div>
                    <div className="ProfileImgContyainer">
                        <img alt="profileimg" className="ProfileImg" src={`${data.PFImg}`}/>
                    </div>
                </div>
                <div className="InfoContainer">
                    <h2 className="Name m-0">{data.name}</h2>

                    <h2 className="details m-0">{data.details}</h2>
                </div>
                <button className="MessageBtn">Message</button>
            </div>
        </>
    );
}