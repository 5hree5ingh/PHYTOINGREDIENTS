import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      popular_products: [
        {
          name: "AKBA 30%",
          image_url: 'images/popular1.jpg',
          link: '/akba'
        },
        {
          name: "Ginseng Extract 20%",
          image_url: 'images/popular2.png',
          link: '/ginseng'
        },
        {
          name: "Nano Curcumin Extract 30%",
          image_url: 'images/cur30.jpg',
          link: '/curcumin30'
        },
        {
          name: "Curcumin Extract 95% Curcuminoids",
          image_url: 'images/popular4.jpg',
          link: '/curcumin95'
        },
        {
          name: "Gymnema dry extract 25-75%",
          image_url: 'images/gyme.jpg',
          link: '/gymnema'
        },
        {
          name: "AKBA 30%",
          image_url: 'images/popular1.jpg',
          link: '/akba'
        },
        {
          name: "Ginseng Extract 20%",
          image_url: 'images/popular2.png',
          link: '/ginseng'
        },
        {
          name: "Nano Curcumin Extract 30%",
          image_url: 'images/cur30.jpg',
          link: '/curcumin30'
        },
        {
          name: "Curcumin Extract 95% Curcuminoids",
          image_url: 'images/popular4.jpg',
          link: '/curcumin95'
        },
        {
          name: "Gymnema dry extract 25-75%",
          image_url: 'images/gyme.jpg',
          link: '/gymnema'
        },
        {
          name: "Acacia Catechin 90%",
          image_url: 'images/Acacia Catechin.jpg',
          link: '/gymnema'
        },
        {
          name: "Berbarine HCL 95%",
          image_url: 'images/Berbarine HCL.PNG',
          link: '/gymnema'
        },
        {
          name: "Green Tea Extract 95%",
          image_url: 'images/Green Tea Extract.PNG',
          link: '/gymnema'
        }
      ]
    }
  }


  render() {
    return (
      <div style={{ width: '100%' }}>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          // showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          // slidesToScroll={4}
          slidesToShow={4}
          // scrollOnDevice={true}
          autoCycle={true}
          cycleInterval={1500}
        >
          {this.state.popular_products.map(val => {
            return (
              <a href={val.link} class="card" style={{ width: "", height: "240px", margin: "20px", overflow: "hidden", boxShadow: "2px 2px 7px 3px grey", textDecoration: 'none' }}>
                <img class="card-img-top" src={val.image_url} alt="Card cap"></img>
                <div class="card-body" style={{ height: "10%" }}>
                  <div class="card-title" style={{ fontSize: "15px", fontWeight: 'bold' }}>{val.name}</div>
                </div>
              </a>
            )
          })}
        </InfiniteCarousel>
      </div>
    )

  }
}




export default Index;