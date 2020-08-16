import React from 'react';
import Inputfields from '../common-components/input-field';
import '../../css-files/contactUs.css';

class Contactus extends React.Component {
    constructor(props){
        super(props);
        this.state={
            inputfields: [
                {
                    type:"text",
                    name:"Name",
                    placeholder:"name",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-male"
                },
                {
                    type:"text",
                    name:"Email",
                    placeholder:"Email",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-envelope"
                },
                {
                    type:"text",
                    name:"Mobile",
                    placeholder:"Mobile",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-phone"
                },
                {
                    type:"text",
                    name:"City",
                    placeholder:"City",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-location-arrow"
                },
                {
                    type:"text",
                    name:"street/address",
                    placeholder:"Street/Address",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-location-arrow"
                },
                {
                    type:"text",
                    name:"Country",
                    placeholder:"Country",
                    isRequired:"true",
                    width:"50%",
                    icon:"fa fa-location-arrow"
                }
            ]
        }
    }
    render(){
        return(
            <div className="contact-us-container">
                <div className="contact-us-heading" style={{height:"100px", position:"relative"}}>
                    <img src="images/hbg1.jpg" alt="contact us" width="100%" height="100%"/>
                    <h2 className="contact-us" style={{position:"absolute",top:"25%",left:"43%", textAlign:"center", color:"white"}}>Contact-us</h2>
                </div>
                {/* <div className="contact-us-heading d-flex" style={{height:"50px",padding:"20px 40px"}}>
                    <h5 style={{ width:"60%",textAlign:"left", fontSize:"18px", fontWeight:"bold"}}>Get in touch</h5>
                    <h2 style={{ width:"40%",textAlign:"center", fontSize:"19px",paddingLeft:"20px", fontWeight:"bold"}}>Phyto Ingredients Biopharma Pvt. Ltd</h2>
                </div> */}
                <div className="contact-us-content">
                <form id="contactform" action="//formspree.io/phytoingredients@gmail.com" method="POST">
                    <div className="contact-us-form" >
                        {
                            this.state.inputfields.map(value=>{
                                return <Inputfields fieldObject={value} />
                            })
                        }
                        <textarea style={{width:"90%", height:"150px", marginTop:"20px", position:"relative", left:"5%", fontSize:"13px",padding:"10px"}} placeholder="write something..." name="Message"></textarea>
                        <div className="button-div" style={{width:"20%", height:"50px", position:"relative", left:"5%",marginTop:"10px"}}>
                            <input type="submit" value="Submit" className="submit-button" style={{width:"100%", height:"80%", background:"#568c11"}}></input>
                        </div>
                    </div>
                    </form>
                    <div className="company-details">
                    <h2 style={{textAlign:"left", fontSize:"19px", fontWeight:"bold"}}>Phyto Ingredients Biopharma Pvt. Ltd</h2>
                    <ul style={{listStyle:"none", padding:"0"}}>
                        <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-location-arrow"></i> <strong style={{fontSize:"13px"}}>Office address : </strong>Gali no.1, Uttam colony,<br></br>Near post office, Jhajjar road,Bahadurgarh,<br></br> Haryana, India-124507</li>
                    </ul>
                            <ul style={{listStyle:"none", padding:"0"}}>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-male"></i> <strong style={{fontSize:"13px"}}>Director & CEO : </strong> Vipul Upadhyay</li>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-envelope"></i> <strong style={{fontSize:"13px"}}>Email : </strong>vipul@phytoingredients.com</li>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-phone"></i> <strong style={{fontSize:"13px"}}>Mobile no. : </strong> +91-8130000846</li>
                            </ul>
                            <ul style={{listStyle:"none", padding:"0"}}>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-male"></i> <strong style={{fontSize:"13px"}}>MD : </strong> Ashish Singh</li>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-envelope"></i> <strong style={{fontSize:"13px"}}>Email : </strong> ashish.singh@phytoingredients.com</li>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-phone"></i> <strong style={{fontSize:"13px"}}>Mobile no. : </strong> +91-8840804180</li>
                            </ul>
                            <ul style={{listStyle:"none", padding:"0"}}>
                                <li style={{fontSize:"14px", textAlign:"justify"}}><i class="fa fa-envelope"></i> <strong style={{fontSize:"13px"}}>Office Email : </strong>phytoingredients@gmail.com</li>
                                <li style={{fontSize:"14px", textAlign:"justify"}}>info@phytoingredients.com</li>
                            </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactus;