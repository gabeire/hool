import React from 'react'
import Zoom from 'react-reveal/Zoom';


import icon_calender from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                  <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calender})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Waqtiga Dhacdada
                                </div>
                                    <div className="desc">
                                        9 Dec 2018 @9:00 Am
    
                                </div>

                                </div>

                            </div>
                        </div> 
                  </Zoom>
                     
                  <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Goobta Dhacdada
                                </div>
                                    <div className="desc">
                                        KM4 Hotel Naasa Hablood
    
                                </div>

                                </div>

                            </div>
                        </div>
                  </Zoom>
                     

                </div>
            </div>
        </div>
    )
}

export default VenueInfo
