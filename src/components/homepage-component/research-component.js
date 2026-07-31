import React from 'react';

function ResearchComponent({ eventObj }) {
    return (
        <div className="event-component-container d-flex">
            <div className="event-image-container our-research-img">
                <img src={eventObj.image_url} alt="event" style={{width:'100%', height:'100px'}}></img>
            </div>
            <div className="event-summary-container" >
                <div className="evnet-heading-container">
                    <strong style={{fontSize:"15px",marginTop:"5px", color:"black"}}>{eventObj.name}</strong>
                </div>
                <div className="event-discription-container">
                    <p style={{fontSize:"13px", color:"black"}}>{eventObj.summary} <a href={eventObj.fileUrl} download> read more...</a></p>
                </div>
            </div>
        </div>
    );
}

export default ResearchComponent;