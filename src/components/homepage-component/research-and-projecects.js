import React from 'react';
import EventComponent from './event-component';
import ResearchComponent from './research-component';

class ResearchAndEvents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            event_config : [
                {
                    name:'CONSULTANT FOR HERBAL EXTRACTION PROJECT’S',
                    image_url: 'images/product-dev.jpg',
                    link: '/events-news',
                    summary: 'We work toward providing conscious, sustainable and tailor-made designs to client with...'
                },
                {
                    name:'CONSULTANT FOR PRODUCT DEVELOPMENT',
                    image_url: 'images/project-management.jpg',
                    link: '/product-developement',
                    summary: 'We at Phyto ingredients Biopharma Pvt. Ltd. having well qualified and experienced team for the...'
                },
                {
                    name:'CONSULTANT FOR PROJECT MANAGEMENT',
                    image_url: 'images/project-extraction.jpg',
                    link: '/project-management',
                    summary: 'We offer the Design Engineering, Project Management in totality or individually as per the...'
                }
            ],
            research_config: [
                {
                    name: 'CISSUS',
                    summary: 'Cissus quadrangularis, an important medicinal plant belonging to the family of Vitaceae, which has been valued for centuries in Ayurvedic medicine',
                    image_url: 'images/researh1.jpeg',
                    fileUrl:'./upload/downloadbale-file-01.pdf'
                },
                {
                    name: 'MUCOADHESIVE',
                    summary: 'Mucoadhesive tablet of Nifedipine was fabricated with objective of avoiding first pass metabolism and to improve its bioavailability with reduction',
                    image_url: 'images/research2.jpg',
                    fileUrl:'./upload/downloadable-file-02.pdf'
                },
                {
                    name: 'BENZOYAL PEROXIDE GEL',
                    summary: 'Benzoyl peroxide (BPO) is a first-line topical treatment in acne vulgaris .It is commonly used in topical formulations for the treatment of acne and',
                    image_url: 'images/research3.jpeg',
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
                    <hr></hr>
                    {
                        this.state.event_config.map(value=>{
                            return <a href={value.link} style={{textDecoration:"none"}}><EventComponent eventObj={value} /></a>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ResearchAndEvents;