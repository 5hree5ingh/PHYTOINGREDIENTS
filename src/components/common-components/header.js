import React from 'react';
import '../../css-files/header.css';
// import UnOrderList from './list';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            home: [
                "hello1",
                "hello2"
            ],
            menuList: [
                {
                    list_value: 'Home',
                    link: '/'
                },
                {
                    list_value: 'Buiseness developement',
                    link: '/buiseness-dev'
                },
                {
                    list_value: 'contact us',
                    link: '/contact-form'
                },
                {
                    list_value: 'news & events',
                    link: '/new-and-events'
                },
                {
                    list_value: 'about us',
                    link: '/about-us'
                }
                
                
                
                
                
            ],
            socialMediaIcon:[
                'images/fb1.png',
                'images/twit.png',
                'images/li1.png'
            ],
            productList:[
                {
                    content: 'Standardized Herbal Extracts',
                    link: '/essential-oil'
                },
                {
                    content: 'Cosmeceutical Ingredients',
                    link: '/cosmoceutical-herbal-products'
                },
                {
                    content: 'Aqueous Herbal Extracts',
                    link: '/standardized-herbal-extracts'
                },
                {
                    content: 'Essential Oils and Oleoresins',
                    link: '/phytochemical'
                },
                {
                    content: 'Essential Oils and Oleoresins',
                    link: '/oleoresines'
                }
            ]
        }
        this.scrollHeader = this.scrollHeader.bind(this);
    }

    scrollHeader(){

    }

    render(){
        return(
            <div className="header-main-div">
                <div className="upper-header" style={{display:"flex",height:"35px",backgroundColor:"green"}}>
                    <div className="social-media-tag-container" style={{width:"30%",display:"flex"}}>
                        {
                            this.state.socialMediaIcon.map(value => {
                                return (
                                    <div className="social-media-icons" style={{width:"10%",height:"100%",marginLeft:"10px"}}>
                                       <a href="/"><img src={value} alt="social-media" style={{width:"100%",height:"100%"}}></img></a> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="phone-number-container" style={{width:"35%",borderRight:"1px solid white",paddingRight:"3px"}}>
                    <p style={{color:"white", fontSize:"14px",marginTop:"5px",textAlign:"right",paddingRight:"10px"}}><i class="fa fa-phone" style={{color:"white"}}></i> +91-8840804180</p>
                    </div>
                    <div className="email-id-container" style={{width:"35%"}}>
                        <p style={{color:"white", fontWeight:"100", fontSize:"14px",marginTop:"5px",textAlign:"center",paddingRight:"10px"}}><i class="fa fa-envelope" style={{color:"white",marginRight:"10px"}}></i> phytoingredients@gmail.com, info@phytoingredients.com</p>
                    </div>
                </div>
                <div className="lower-header" style={{display:"flex"}}>
                    <div className="logo-container" style={{width:"20%"}}>
                        <img src="images/Visiting_Card.png" alt="logo" style={{width:"100%",height:"65px",marginTop:"5px"}}></img>
                    </div>
                    <div className="header-menu-list-container" style={{width:"70%", display:"flex", marginLeft:"12%"}}>
                        {
                            this.state.menuList.map(value => {
                                return <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"4%",fontSize:"14px",paddingTop:"25px"}}><a href={value.link} style={{textDecoration:"none"}}>{value.list_value.toUpperCase()}</a></div>
                            })
                        }
                            <div class="dropdown" style={{paddingTop:"5px"}}>
                                <p class="dropbtn">PRODUCT</p>
                                <div class="dropdown-content" style={{marginLeft:"-70px"}}>
                                    {
                                        this.state.productList.map(value => {
                                            return <a href={value.link} style={{fontSize:"14px"}}>{value.content}</a>
                                        })
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;