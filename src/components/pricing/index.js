import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

export class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Dalbo','Bash','Xidigaha'],
        desc:[
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry'
        ],
        linkTo:['http://sales/d','http://sales/b','http://sales/x'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i) =>(
        <Zoom delay={this.state.delay[i]} key="i">
           
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>

                </div>
        </Zoom>     
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Qiimaha</h2>


                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Pricing
