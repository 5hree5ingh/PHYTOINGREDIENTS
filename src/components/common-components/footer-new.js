import React from 'react';
import '../../css-files/footer.css';

class Footer extends React.Component{

    render(){
        return(
            <div className="footer-new-container">
                <div className='footer-lists'>
                    <div className='footer-div'>
                        <div className='footer-list-heading'>Products</div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/phytochemical' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Phytochemicals</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/cosmoceutical-herbal-products' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Cosmeceutical Ingredients</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/standardized-herbal-extracts' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Standardized Herbal Extracts</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/oleoresines' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Oleoresine's</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/essential-oil' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Essential Oils</a></div>
                    </div>
                    <div className='footer-div'>
                        {/* <div className='footer-list-heading'>Project’s & Services</div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/events-news' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Consultant for Herbal Extraction Project’s</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/product-developement' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Consultant for Product Development</a></div>
                        <div><i class="fa fa-chevron-right" aria-hidden="true"></i><a href='/project-management' style={{textDecoration:"none", color:'white', marginLeft:'8px', fontSize:'.9rem'}}>Consultant for Project Management</a></div>
                        <br/> */}
                        <div className='footer-address'>
                        <div className='footer-list-heading'>Get in Touch - GERMANY</div>
                        <div style={{display:'flex'}}><i class="fa fa-address-card" aria-hidden="true" style={{marginTop:'2px'}}></i><div  style={{marginLeft:'5px'}}>Mutterstadter strasse 58, 68219, </div></div>
                        <div style={{marginLeft:'20px'}}>Mannheim, Germany</div>
                        <div style={{display:'flex'}}><i class="fa fa-user" aria-hidden="true"  style={{marginTop:'2px'}}></i> <div  style={{marginLeft:'10px'}}> +49-176-22293400</div></div>
                        <div><i class="fa fa-envelope" aria-hidden="true"></i>  export@phytoingredients.com</div>
                        </div>

                    </div>
                    <div className='footer-div'>
                        <div className='footer-list-heading'>Get in Touch - INDIA</div>
                        <div className='footer-address'>
                        <div style={{fontWeight:'800'}}>Phyto Ingredients Biopharma Pvt. Ltd</div>
                        <div style={{display:'flex'}}><i class="fa fa-address-card" aria-hidden="true" style={{marginTop:'2px'}}></i><div  style={{marginLeft:'5px'}}> Gali no.1, Uttam colony, </div></div>
                            <div style={{marginLeft:'20px'}}>Near post office, Jhajjar road,</div>
                            <div style={{marginLeft:'20px'}}>Bahadurgarh, Haryana, India-124507</div>
                        <div style={{display:'flex'}}><i class="fa fa-address-card" aria-hidden="true" style={{marginTop:'2px'}}></i><div  style={{marginLeft:'5px'}}>Sonipat Khorkhoda Road, VPO Asoudha Todran, </div></div>
                            <div style={{marginLeft:'20px'}}>Tehsil Bahadurgarh, Jhajjar, Haryana, 124505</div>
                            <div style={{display:'flex'}}><i class="fa fa-user" aria-hidden="true"  style={{marginTop:'2px'}}></i> <div  style={{marginLeft:'10px'}}> +91-8130000846, +91-8840804180</div></div>
                            {/* <div><i class="fa fa-phone-square" aria-hidden="true"></i> +91-8840804180</div> */}
                            {/* <div style={{display:'flex'}}><i class="fa fa-user" aria-hidden="true"  style={{marginTop:'2px'}}></i> <div  style={{marginLeft:'10px'}}> Vipul Upadhayay (+91-8130000846)</div></div> */}
                            {/* <div><i class="fa fa-phone-square" aria-hidden="true"></i> +91-8130000846</div> */}
                            <div><i class="fa fa-envelope" aria-hidden="true"></i>  phytoingredients@gmail.com, info@phytoingredients.com</div>
                        </div>
                    </div>
                </div>
                <div className='footer-contact-us'>
                    <div className='contact-icon-cntainer'>
                        <a href='https://www.facebook.com/Phyto-Ingredients-Biopharma-Private-Limited-103242694379030/' style={{color:'white', borderRight:'1px solid'}}><i class="fa fa-facebook" aria-hidden="true"></i> </a>
                        <a href='https://www.twitter.com' style={{color:'white', borderRight:'1px solid'}}><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                        <a href='https://www.instagram.com' style={{color:'white', borderRight:'1px solid'}}><i class="fa fa-instagram" aria-hidden="true"></i> </a>
                        <a href='https://www.linkedin.com/company/phyto-ingredients-biopharma-private-limited?trk=company_home_typeahead_result' style={{color:'white', borderRight:'1px solid'}}><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                        <a href='https://www.google.com' style={{color:'white'}}><i class="fa fa-google-plus" aria-hidden="true"></i> </a>
                    </div>
                    <div>
                        <i class="fa fa-copyright" aria-hidden="true"></i> All right Reversed, Phytoingredients
                    </div>
                </div>
                <img src="./images/Gfooter.png" alt="icon"  className='footer-grass'/>
            </div>
        )
    }
}

export default Footer;
