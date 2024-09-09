import React from "react";
import './FloarMapPhotos.css';

export default function LRSImageComp({ image, upload_date }) {
    return (
        <div className="LRImageContainer d-flex flex-column">
            <img className="LRImage" src={image} alt="img" />
            <p className="bottomText m-0">
                {`Upload Date: ${upload_date}`}
            </p>
        </div>
    );
}
