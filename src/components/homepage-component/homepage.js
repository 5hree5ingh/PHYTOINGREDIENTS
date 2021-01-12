import React from 'react';
import '../../css-files/homepage.css';
import HomeCarousel from './homepage-carousel';
import Products from './product-and-service';
import ResearchAndEvent from './research-and-projecects';
import OurPopularProducts from './popular-products';
import halalPdf from '../../documents/halal.pdf';
import msmePdf from '../../documents/msme.pdf';
import isoPdf from '../../documents/iso.pdf';
import kosherPdf from '../../documents/kosher.pdf';
import haccpPdf from '../../documents/haccp.pdf';
import gmpPdf from '../../documents/gmp.pdf';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productsArray:[
                {
                    link:'/essential-oil',
                    title:'Essential Oils',
                    image:'images/product3.jpg'
                },
                {
                    link:'/cosmoceutical-herbal-products',
                    title:'Cosmoceutical Herbal Products',
                    image:'images/herbal-4.jpeg'
                },
                {
                    link:'/standardized-herbal-extracts',
                    title:'Standardized Herbal Extracts',
                    image:'images/product4.jpg'
                },
                 {
                    link:'/phytochemical',
                    title:"Phytochemical's",
                    image:'images/product1.jpg'
                },
                {
                    link:'/oleoresines',
                    title:"Oleoresines's",
                    image:'images/herbal-7.jpg'
                },
                {
                    link:'/contact-form',
                    title:'Contract Manufacturing',
                    image:'images/producr2.jpg'
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
               
            ]
        }
    }
    render(){
        return(
            <div>
                <HomeCarousel />
                <div className="about-service-container">
                    <div className="container-heading">
                        <h4>About Us</h4>
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
                            <div className="container-heading">
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
                    standardized Herbal Extracts.</p>
                    </div>
                    
                    {
                        this.state.productsArray.map(value => {
                            return <Products link={value.link} title={value.title} image={value.image}/>
                        })
                    }
                    </div>
                </div>
                <div  id="/testnow" className="Certifications-container" style={{position:"relative"}}>
                    <div className="product-container">
                            <div className="container-heading">
                                <h4 style={{"top":"25%"}}>Our Certifications</h4>
                                <div className="star-container d-flex">
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                    <div className="star" ></div>
                                </div>
                                <div className="line-container_1" style={{border:"0.5px solid green "}}></div>
                                <div className="line-container_2" style={{border:"0.5px solid green "}}></div>
                            </div>
                            <div className="d-flex isoflexcon">
                                <a href={isoPdf} target="_blank" className="iso-test"><img src="images/iso.png" alt="test" className="iso-test2"/></a>
                                <a href={kosherPdf} target="_blank" className="iso-test"><img src="images/kosher.png" alt="test" className="iso-test2" style={{height: "93%"}} /></a>
                                <a href={msmePdf} target="_blank" className="iso-test"><img src="images/msme.png" alt="test" className="iso-test2" style={{height: "93%"}} /></a>
                                <a href={halalPdf} target="_blank" className="iso-test"><img src="images/halal.jpg" alt="test" className="iso-test2"/></a>
                                <a href={gmpPdf} target="_blank" className="iso-test"><img src="images/gmp.jfif" alt="test" className="iso-test2"/></a>
                                <a href={haccpPdf} target="_blank" className="iso-test"><img src="images/haccp.jfif" alt="test" className="iso-test2"/></a>
                            </div>
                    </div>
                </div>
                <div className="research-and-events-container" >
                <div className="container-heading" id="research">
                                <h4 style={{"top":"25%"}}>Our Research & Projects</h4>
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
                {/* <div className="testimonials-outer-container">
                <div className="test-bg">
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
                    <div className="testimonials-content-container">
                        {
                            this.state.testimonials.map(value => {
                                return <Testimonials obj={value} />
                            })
                        } 1     
                    </div>
                    <Mobiletestimonials obj={this.state.testimonials} />
                </div> */}
                <div className="news-event-update-container">
                <div className="container-heading">
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
                    <OurPopularProducts/>
                </div>
                </div>
                
               

            </div>
        )
    }
}

export default Homepage;