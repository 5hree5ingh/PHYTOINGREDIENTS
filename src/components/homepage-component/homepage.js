import React from 'react';
import '../../css-files/homepage.css';
import HomeCarousel from './homepage-carousel';
import Products from './product-and-service';
import Testimonials from './testimonials';
import ResearchAndEvent from './research-and-projecects';
import EventAndNews from './news-and-events';
// import PopularEventComponent from './popular-events';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productsArray:[
                {
                    link:'/essential-oil',
                    title:'Essential Oils',
                    image:'images/herbal-1.jpeg'
                },
                {
                    link:'/cosmoceutical-herbal-products',
                    title:'Cosmoceutical Herbal Products',
                    image:'images/herbal-4.jpeg'
                },
                {
                    link:'/standardized-herbal-extracts',
                    title:'Standardized Herbal Extracts',
                    image:'images/herbal-7.jpg'
                },
                 {
                    link:'/phytochemical',
                    title:"Phytochemical's",
                    image:'images/herbal-7.jpg'
                },
                {
                    link:'/oleoresines',
                    title:"Oleoresines's",
                    image:'images/Essential-Oils.pngr'
                },
                {
                    link:'/contact-form',
                    title:'Contract Manufacturing',
                    image:'images/herbal-7.jpg'
                }
                
            ],
            testimonials:[
                {
                    name:"Hippocrates",
                    msg: "Nature itself is the best Physicians"
                },
                {
                    name:"John Ruskin",
                    msg: "Nature is painting for us, day after day, pictures of infinite beauty "
                },
                {
                    name:"Rosemary Gladstar",
                    msg: "The plants have enough spirit to transform our limited vision."
                },
                {
                    name:" Mahatma Gandhi",
                    msg: "Earth's provide enough to satisfy every man's needs but not every man's greed"
                }
               
            ],
            eventAndnews_config:[
                {
                    name:"Hippocrates",
                    summary: "Nature itself is the best Physicians",
                    image_url: 'images/bg-1.jpg'
                },
                {
                    name:"Hippocrates",
                    summary: "Nature itself is the best Physicians",
                    image_url: 'images/nature-event-01.jpg'
                },
                {
                    name:"Hippocrates",
                    summary: "Nature itself is the best Physicians",
                    image_url: 'images/nature-event-02.jpg'
                },
                {
                    name:"Hippocrates",
                    summary: "Nature itself is the best Physicians",
                    image_url: 'images/nature-event-03.jpg'
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <HomeCarousel />
                <div className="about-service-container">
                    <div className="service-heading">
                        <h4>About Our Service</h4>
                        <div className="star-container d-flex">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
                        <div className="line-container_1"></div>
                        <div className="line-container_2"></div>
                    </div>
                    <div className="service-para-container">
                    <p className="service-para">Phyto Ingredients Biopharma Pvt. Ltd. has been established by Young enthusiast
                    experienced professionals having sound experience in the field of research, 
                    development & manufacturing of quality Active pharmaceuticals ingredients, 
                    standardized Herbal Extracts . Phyto Ingredients Biopharma is constantly exercising
                     critical thinking to maintain professional competence for excelling the quality of
                      its products. Phyto Ingredients Biopharma will always embrace highest standard of 
                      character to serve and promote quality of life through quality product with higher performance..... <a href="/about-us">read more</a></p>
                    </div>
                   
                </div>
                <div className="product-and-service-container d-flex" style={{position:"relative"}}>
                    <div className="product-container">
                            <div className="container-heading" style={{height:"12%"}}>
                                <h4 style={{"top":"25%"}}>Product And Services</h4>
                                <div className="star-container d-flex">
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>
                            <div className="service-para-container">
                    <p className="service-para">Phyto Ingredients Biopharma Pvt. Ltd. has been established by Young enthusiast
                    experienced professionals having sound experience in the field of research, 
                    development & manufacturing of quality Active pharmaceuticals ingredients, 
                    standardized Herbal Extracts.... <a href="/about-us">read more</a></p>
                    </div>
                    
                    {
                        this.state.productsArray.map(value => {
                            return <Products link={value.link} title={value.title} image={value.image}/>
                        })
                    }
                    </div>
                </div>
                <div className="research-and-events-container">
                <div className="container-heading">
                                <h4 style={{"top":"25%"}}>Our Research & Events</h4>
                                <div className="star-container d-flex">
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>
                        <ResearchAndEvent />
                </div>
                <div className="testimonials-outer-container" style={{height:"80vh",position:"relative"}}>
                <div className="test-bg" style={{position:"absolute",width:"100%",height:"100%"}}>
                            <img src="images/bg-15.jpg" alt="test-bg" width="100%" height="100%"></img>
                        </div>
                <div className="container-heading">
                                <h4 style={{"top":"25%"}}>Testimonials</h4>
                                <div className="star-container d-flex">
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>
                    <div className="testimonials-content-container d-flex" style={{paddingLeft:"3%"}}>
                        {
                            this.state.testimonials.map(value => {
                                return <Testimonials obj={value} />
                            })
                        } 1     
                    </div>
                </div>
                {/* <div className="popular-products">
                <div className="container-heading" style={{height:"25%"}}>
                                <h4>Our Popular Events</h4>
                                <div className="star-container d-flex">
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>
                <div className="popular-products-container d-flex">
                   {
                       this.state.eventAndnews_config.map( value => {
                        return <PopularEventComponent eventObj={value}/>
                    })
                   }
                   </div> 
               
                </div> */}
                <div className="news-event-update-container">
                <div className="container-heading" style={{height:"25%", top:"1%"}}>
                                <h4>Our popular Products</h4>
                                <div className="star-container d-flex">
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>

                            <div className="news-content-container d-flex">
                    {
                        this.state.eventAndnews_config.map( value => {
                            return <EventAndNews eventObj={value}/>
                        })
                    }
                    
                </div>
                </div>
                
               

            </div>
        )
    }
}

export default Homepage;