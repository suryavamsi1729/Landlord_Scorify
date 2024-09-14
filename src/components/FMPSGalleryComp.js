import React from "react";
import './FloarMapPhotos.css';

export default function FMPSGalleryComp({ title, data }) {
    const imagesToShow = data.slice(0, 4);
    const remainingImages=data.length-4;
    return (
        <>
            <div className="GalleryContainer d-flex flex-column p-3">
                <h1 className="Heading m-0">{title}</h1>
                <div className="BodyContainer d-flex flex-column">
                    <div className="rowContainer d-flex flex-row justify-content-between">
                        {imagesToShow.slice(0, 2).map((image, index) => (
                            <div key={index} className="ImgContainer">
                                <img alt="photoimg" className="Img" src={image.image} style={{borderRadius:"8px"}} />
                            </div>
                        ))}
                    </div>
                    <div className="rowContainer d-flex flex-row justify-content-between">
                        {imagesToShow.slice(2, 4).map((image, index) => (
                            <div key={index} className="ImgContainer" style={{ position: 'relative' }}>
                                <img alt="photoimg" className="Img" src={image.image} style={{borderRadius:"8px"}}/>
                                {index===1 && remainingImages>0 &&(
                                    <div className="OverFlowContainer d-flex flex-column justify-content-center align-items-center">
                                        {remainingImages < 10 ? `${remainingImages+1}+` : `${remainingImages}+`}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
