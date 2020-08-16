
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common-components/header';
import Homepage from './components/homepage-component/homepage';
import Footer from './components/common-components/footer';
import './App.css';
import EssentialOil from './components/products-services/essentialOil';
import Standardized from './components/products-services/standardized-herbal-extracts';
import Cosmoceutical from './components/products-services/cosmoceutical-herbal-products';
import Phytochemical from './components/products-services/phytochemical';
import Oleoresines from './components/products-services/oleoresines';
import ContractManufacturing from './components/products-services/contract-manufacturing';
import AboutUs from './components/common-components/about-us';
import BuisnessDevelopement from './components/common-components/buisness-devlopement';
import NewsAndEventsComponents from './components/common-components/about-news-and-events';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path='/essential-oil' component={EssentialOil} exact/>
          <Route path='/standardized-herbal-extracts' component={Standardized} exact/>
          <Route path='/cosmoceutical-herbal-products' component={Cosmoceutical} exact/>
          <Route path='/phytochemical' component={Phytochemical} exact/>
          <Route path='/oleoresines' component={Oleoresines} exact/>
          <Route path='/contact-form' component={ContractManufacturing} exact/>
          <Route path='/about-us' component={AboutUs} exact/>
          <Route path='/buiseness-dev' component={BuisnessDevelopement} exact/>
          <Route path='/events-news' component={NewsAndEventsComponents} exact/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;