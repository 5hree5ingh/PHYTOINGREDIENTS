import React from 'react';
import '../../css-files/popular-products-carousel.css';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      popular_products: [
        { name: "AKBA 30%", image_url: 'images/popular1.jpg', link: '/akba' },
        { name: "Ginseng Extract 20%", image_url: 'images/popular2.png', link: '/ginseng' },
        { name: "Nano Curcumin Extract 30%", image_url: 'images/cur30.jpg', link: '/curcumin30' },
        { name: "Curcumin Extract 95% Curcuminoids", image_url: 'images/popular4.jpg', link: '/curcumin95' },
        { name: "Gymnema dry extract 25-75%", image_url: 'images/gyme.jpg', link: '/gymnema' },
        { name: "Acacia Catechin 90%", image_url: 'images/Acacia Catechin.jpg', link: '/gymnema' },
        { name: "Berbarine HCL 95%", image_url: 'images/Berbarine HCL.PNG', link: '/gymnema' },
        { name: "Green Tea Extract 95%", image_url: 'images/Green Tea Extract.PNG', link: '/gymnema' },
      ]
    };
  }

  render() {
    // Duplicate the list so the infinite loop looks seamless
    const items = [...this.state.popular_products, ...this.state.popular_products];

    return (
      <div className="pp-carousel-wrapper">
        <div className="pp-carousel-track">
          {items.map((val, i) => (
            <a
              key={i}
              href={val.link}
              className="pp-card"
            >
              <div className="pp-card-img-wrap">
                <img src={val.image_url} alt={val.name} />
              </div>
              <div className="pp-card-body">
                <div className="pp-card-title">{val.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;