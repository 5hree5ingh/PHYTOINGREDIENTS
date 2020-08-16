import React from 'react';
import '../../css-files/footer.css';
import FooterContent from './footer-content';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: [
                {
                    listItem:[
                        {
                            itemName:'Phytochemicals',
                            link: '/essential-oil'
                        },
                        {
                            itemName: 'Cosmeceutical Ingredients',
                            link: '/essential-oil'
                        },
                        {
                            itemName: 'Standardized Herbal Extracts',
                            link: '/essential-oil'
                        },
                        {
                            itemName: 'Aqueous Herbal Extracts',
                            link: '/essential-oil'
                        },
                        {
                            itemName: 'Essential Oils and Oleoresins',
                            link: '/essential-oil'
                        } 
                    ],
                    title: 'Products'
                },
                {
                    listItem:[
                        {
                            itemName:'Consultant for Herbal Extraction Project’s',
                            link: '/essential-oil'
                        },
                        {
                            itemName:'Consultant for Product Development',
                            link: '/essential-oil'
                        },
                        {
                            itemName:'Consultant for project management',
                            link: '/essential-oil'
                        }  
                    ],
                    title: 'News & Events'
                },
                {
                    listItem:[
                        {
                            itemName:'heavy work',
                            link: '/essential-oil'
                        },
                        {
                            itemName:'tarun harsh',
                            link: '/essential-oil'
                        },
                        {
                            itemName:'sheetal',
                            link: '/essential-oil'
                        }   
                    ],
                    title: 'connect'
                },
                {
                    listItem:[
                        {
                            itemName:`Phyto Ingredients Biopharma Pvt. Ltd. has been
                            established to develop and promote herbal industry
                            through research & development in India.`,
                            link: ''
                        },
                        {
                            itemName:`Aditi Upadhyay
                            Gali no.1, Uttam colony,
                            Near post office, Jhajjar road,
                            Bahadurgarh, Haryana, India-124507
                            Mob:- +91-8840804180
                            info@phytoingredients.com
                            phytoingredients@gmail.com`,
                            link: ''
                        }
                        
                         
                    ],
                    title: 'connect'
                }
            ]
        }   
    }

    render(){
        return(
            <div className="footer d-flex">
                {
                    this.state.content.map(value => {
                        return <FooterContent contentItem={value} />
                    })
                }
            </div>
        )
    }
}

export default Footer;