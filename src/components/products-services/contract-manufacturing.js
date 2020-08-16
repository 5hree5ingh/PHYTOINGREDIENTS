import React from 'react';
import '../../css-files/contactUs.css'
class ContractManufacturing extends React.Component {
    render(){
        return (
            <div>
                <h3>Contact Form</h3>
                <div className='contact-us-container'>
                    <div className='contact-us-form-container'>
                        <form>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." />

                            <label for="email">Email</label>
                            <input type="text" id="lname" name="email" placeholder="Your email.." />

                            <label for="subject">Subject</label>              
                            <input type="text" id="lname" name="email" placeholder="Your email.." />

                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className='address-container'>
                        <h4>Phyto Ingredients Biopharma Pvt. Ltd</h4>
                        <p>
                        Office:
                        Gali no.1, Uttam colony,
                        Near post office, Jhajjar road,
                        Bahadurgarh, Haryana, India-124507</p>

                        <p>Aditi Upadhyay
                        Mob: +91-8840804180
                        E   mail : info@phytoingredients.com / 
                        phytoingredients@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContractManufacturing;