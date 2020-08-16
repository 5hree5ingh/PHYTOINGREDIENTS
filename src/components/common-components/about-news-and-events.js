import React from 'react';
import UnorderList from './common-unorder-list';
import '../../css-files/about-us.css';

class NewsAndEventsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            crucial_points:[
                'Plant Design Concept with respect to various International GMP guidelines like EU GMP, PIC/S, US FDA and WHO.',
                'Interface with International Process/ Regulatory Authorities.',
                'Man and Material Movements.',
                'Logical Flow for the material and man movement.',
                'Utilities and Equipments Balancing.',
                'Time and Cost estimates.'
            ],
            stage_first:[
                'Batch sizes',
                'Containment needs',
                'Type of equipment and machinery',
                'Inventory norms',
                'Expansion philosophy'
            ],
            stage_second:[
                'Preliminary layout based on availability of space and resources',
                'Targeted environmental cleanliness category',
                'Optimal water quality and water treatment facilities'
            ],
            stage_third:[
                'Conceptualization of building construction',
                'Drawing out user requirement specification (URS)',
                'Drawing out project schedules through bar charts',
                'Water generation and distribution system design',
                'Production environment designing like heating, ventilation and air conditioning',
                'Pressure differential monitoring'
            ]
        }
    }
    render(){
        return (
            <div className="about-news-and-events">
                <h5 className="news-events-heading">CONSULTANT FOR HERBAL EXTRACTION PROJECT’S</h5>
                <p className="common-para">We work toward providing conscious, sustainable and tailor-made designs to client
                with integrated multi-disciplinary services. From green-field to brown field projects
                 we specialize in the concept design with practical solutions to projects of diversified
                  nature like Herbal Extracts, API’s, Oleoresine’s, Phytochemicals, Essential Oil’s, R&Ds,
                   Warehousing,etc. Concept layout is the first cut layout made, based on the client interaction
                    and URS. Basic scheme of services is also worked out for overall understanding of project.
                     This helps the client to understand the project bandwidth and it is the base document to
                      take the project further.</p>
                <p className="common-para">Concept Engineering will be a crucial document to decide the project plan and will be a base
                     document for Detailed Engineering. This involves the initial conceptualization of the entire
                      project which helps in forming the foundations on which the rest of the project is built up.</p>
                <p className="common-para">The Concept Engineering will have followings crucial points to take care:</p>
                <UnorderList listItem={this.state.crucial_points} />
                <p className="common-para">Concept Engineering will have following stages:</p>
                <h5 className="news-events-heading">STAGES 1:</h5>
                <p className="common-para">This involves gathering functional requirements of the proposed facility which includes production process together with the required level of automation.</p>
                <UnorderList listItem={this.state.stage_first} />
                <h5 className="news-events-heading">STAGES 2:</h5>
                <p className="common-para">Starts by addressing the following concerns:</p>
                <UnorderList listItem={this.state.stage_second} />
                <h5 className="news-events-heading">STAGES 3:</h5>
                <p className="common-para">All the above data are finally used to prepare the following:</p>
                <p className="common-para">An overall budget for project execution The entire facility layout for the preliminary stage as per national and international regulatory norms</p>
                <UnorderList listItem={this.state.stage_third} />
                
            </div>
        )
    }
}

export default NewsAndEventsComponent;