import React, { Component } from 'react'
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venueInfo'
import Highlight from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'


export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:"" }}>
        <Header/>
        <Element name="Waqtiga">
           <Featured/>
        </Element>

        <Element name="Warbixin">
           <VenueInfo/>
        </Element>

        <Element name="Sharaxaad">
           <Highlight/>
        </Element>

        <Element name="Qiimaha">
           <Pricing/>
        </Element>

        <Element name="Goobta">
           <Location/>
        </Element>
        
        
        
        <Footer/>
      </div>
    )
  }
}
