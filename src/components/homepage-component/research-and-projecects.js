import React from 'react';
import EventComponent from './event-component';
import ResearchComponent from './research-component';

class ResearchAndEvents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            event_config : [
                {
                    name:'event_1',
                    image_url: 'images/product-dev.jpg',
                    summary: 'summary'
                },
                {
                    name:'event_1',
                    image_url: 'images/project-management.jpg',
                    summary: 'summary'
                },
                {
                    name:'event_1',
                    image_url: 'images/project-extraction.jpg',
                    summary: 'summary'
                }
            ],
            research_config: [
                {
                    name: 'CISSUS',
                    summary: 'Extraction and Isolation of Cissus Quadrangularis Linn',
                    image_url: 'images/cissus.jpg',
                    fileUrl:'./upload/downloadable-file-01.pdf'
                },
                {
                    name: 'MUCOADHESIVE',
                    summary: 'Formulation & Evaluation of Mucoadhesive Drug Delivery System of Nifedipine',
                    image_url: 'images/mucoadhesive.png',
                    fileUrl:'./upload/downloadable-file-02.pdf'
                },
                {
                    name: 'BENZOYAL PEROXIDE GEL',
                    summary: 'Formulation & Evaluation of Benzoyl Peroxide Gel',
                    image_url: 'images/benzoyal.png',
                    fileUrl:'./upload/downloadable-file-03.pdf'
                }
            ]
        }
    }
    render(){
        return(
            <div className="research-and-event-inner-container d-flex">
                <div className="research-container">
                    <h5 style={{fontWeight:"100", fontSize:"16px", position:'fixed'}}>Researches</h5>
                    <hr></hr>
                    
                    {
                        this.state.research_config.map(value => {
                            return <ResearchComponent eventObj={value} />
                        })
                    }
                    
                </div>
                <div className="event-container">
                    <h5 style={{fontWeight:"100", fontSize:"16px", position:"absolute",top:"-20%",left:"40%", margin:"5px"}}>Our Projects</h5>
                    <hr></hr>
                    {
                        this.state.event_config.map(value=>{
                            return <EventComponent eventObj={value} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ResearchAndEvents;