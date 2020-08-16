import React from 'react';
import '../../css-files/header.css';

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
                    list_value: 'About Us',
                    link: '/about-us'
                },
                {
                    list_value: 'Research & Projects',
                    link: '/#research'
                },
                {
                    list_value: 'Business Developement',
                    link: '/buiseness-dev'
                },
                {
                    list_value: 'Contact Us',
                    link: '/contact-form'
                }
                
            ],
            socialMediaIcon:[
                'images/fb2.png',
                'images/twit1.png',
                'images/lin1.png'
            ],
            productList:[
                {
                    content: 'Essential Oils',
                    link: '/essential-oil'
                },
                {
                    content: 'Cosmeceutical Ingredients',
                    link: '/cosmoceutical-herbal-products'
                },
                {
                    content: 'Standardized Herbal Extracts',
                    link: '/standardized-herbal-extracts'
                },
                {
                    content: 'Phytochemicals',
                    link: '/phytochemical'
                },
                {
                    content: "Oleoresines",
                    link: '/oleoresines'
                }
            ]
        }
    }

    render(){
        return(
            <div className="header-main-div">
                <div className="upper-header">
                    <div className="social-media-tag-container" style={{display:"flex", marginRight:'auto'}}>
                        <a href='https://www.facebook.com/Phyto-Ingredients-Biopharma-Private-Limited-103242694379030/' style={{width:'50px',color:'white', fontSize:'24px', marginLeft:'4px',borderRight:'1px solid white',padding:'2px 5px 2px 5px'}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href='https://www.linkedin.com/company/phyto-ingredients-biopharma-private-limited?trk=company_home_typeahead_result' style={{width:'50px',color:'white', fontSize:'24px', marginLeft:'4px',borderRight:'1px solid white',padding:'2px 5px 2px 5px'}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href='https://www.google.com' style={{width:'50px',color:'white', fontSize:'24px', marginLeft:'4px',borderRight:'1px solid white',padding:'2px 5px 2px 5px'}}><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                    </div>
                    <div className="phone-number-container" style={{width:"35%",borderRight:"1px solid white",paddingRight:"3px"}}>
                    <p style={{color:"white", fontSize:"14px",marginTop:"5px",textAlign:"right",paddingRight:"10px"}}><i class="fa fa-phone" style={{color:"white"}}></i> +91-8130000846, +91-8840804180</p>
                    </div>
                    <div className="email-id-container" style={{width:"35%"}}>
                        <p style={{color:"white", fontWeight:"100", fontSize:"14px",marginTop:"5px",textAlign:"center",paddingRight:"10px"}}><i class="fa fa-envelope" style={{color:"white",marginRight:"10px"}}></i> phytoingredients@gmail.com, info@phytoingredients.com</p>
                    </div>
                </div>
                <div className="lower-header" style={{display:"flex", justifyContent:"space-between", position:'sticky'}}>
                    <div className="logo-container">
                        <a href='/'><img src="images/Visiting_Card.png" alt="logo"></img></a>
                    </div>
                    <div className="header-menu-list-container">
                        {/* {
                            this.state.menuList.map(value => {
                                return <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".8em",paddingTop:"25px"}}><a href={value.link} style={{textDecoration:"none"}}>{value.list_value.toUpperCase()}</a></div>
                            })
                        } */}
                        <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".9em",paddingTop:"25px"}}><a href="/" style={{textDecoration:"none"}}>Home</a></div>
                        <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".9em",paddingTop:"25px"}}><a href="/about-us" style={{textDecoration:"none"}}>About Us</a></div>
                        <div class="dropdown" style={{paddingTop:"5px"}}>
                                <p class="dropbtn">Products & Services</p>
                                <div class="dropdown-content">
                                    {
                                        this.state.productList.map(value => {
                                            return <a href={value.link} style={{fontSize:"14px"}}>{value.content}</a>
                                        })
                                    }
                                </div>
                            </div>
                        <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".9em",paddingTop:"25px"}}><a href="/#research" style={{textDecoration:"none"}}>Research & Projects</a></div>
                        <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".9em",paddingTop:"25px"}}><a href="/buiseness-dev" style={{textDecoration:"none"}}>Business Developement</a></div>
                        <div className="menu-list-item" style={{width:"auto",height:"65px",marginRight:"3%",fontSize:".9em",paddingTop:"25px"}}><a href="/contact-form" style={{textDecoration:"none"}}>Contact Us</a></div>


                            
                            
                                <img src="/images/menu.png" alt="menu" id="menu-image"/>
                                <div className="menu-dropdown">
                                    {
                                        this.state.menuList.map(value => {
                                            return <a href={value.link}>{value.list_value}</a>
                                        })
                                    }
                                </div>
                        
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;