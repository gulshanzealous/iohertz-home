
import React,{Component} from 'react'
import './home.css'
import heart from '../../resources/images/heart.png'
import longRange from '../../resources/images/long-range.png'
import longBattery from '../../resources/images/long-battery.png'
import costEffective from '../../resources/images/cost-effective.png'
import logo from '../../resources/images/logo100.png'

import { Menubar } from '../../components';
import { Button } from 'semantic-ui-react'
 
class Home extends Component {


    render(){
        return(
            <div>
            
                <div className='home-wrapper' id='home-wrapper' >

                    <div className='cover-container'>
                    </div>


                    <div className='first-container' > 
                        <div className='intro-large-text' >
                            Connectivity is the
                            <img src={heart} className='heart-icon-intro' />
                            beat of IoT
                        </div>

                        <br/>
                        <br/>

                        <div className='intro-normal-text' >
                            At IOhertz, we create products which bring seamless connectivity to industries, 
                            <br />
                            smart cities and homes using revolutionary technologies like LoRaWAN,
                            <br/>
                            NB-IoT, Bluetooth 5.0, 4G LTE.
                            <br/>
                            Join us in our mission to create a proactive, smarter and brighter world.
                        </div>

                        <br/> <br/> <br/>

                        <a href="#products-section">
                        <Button color='blue' size='big' className='intro-button' >
                             Explore with us
                        </Button>
                        </a>
                    </div>

                </div>

                <div className='desc-wrapper-one' id='products-section' >
                    
                    <div className='product-block-one'>
                        <div className='product-header'>
                            LoRaWAN Gateway
                        </div>
                        <div className='product-detail'>
                            Gateway talks to your LoRaWAN devices(nodes) and relays their data to the internet intelligentally.
                            With LAN & 4G connectivity for backhaul and 8 concurrent channels for Lora transmission with maximum range of 15km,
                            the industry grade gateway is apt for all your IoT requirements.
                        </div>
                        <Button color='blue' size='large' className='product-link-button' >
                            Coming Soon
                        </Button>
                    </div>
                    
                    <div className='product-block-two'>
                        <div className='product-header'>
                            LoRaWAN Network Server Platform
                        </div>
                        <div className='product-detail'>
                            Designed from ground up, the network server is tailored to handle any LoRaWAN gateway following LoRaWAN specifications.
                            The cloud hosted platform is flexible and scalable according to your requirements with an economic pay-as-you-go pricing model.
                        </div>
                        <Button color='blue' size='large' className='product-link-button' >
                            Coming Soon
                        </Button>
                    </div>

                    <div className='product-block-three'>
                        <div className='product-header'>
                            IoT Developer Platform 
                        </div>
                        <div className='product-detail'>
                            A technology agnostic Iot application platform is an all-in-one developer portal to test, trial and deploy IoT devices
                            within a few clicks. Leverage the true power of IoT by integrated powerful analytics to help you monitor and innovate
                            your IoT solutions with minimum effort.
                        </div>
                        <Button color='blue' size='large' className='product-link-button' >
                            Coming Soon
                        </Button>
                    </div>
                    

                    <div className='lorawan-layer'>
                        <div className='lorawan-heading'>
                            Why LoRaWAN for IoT
                        </div>
                        <div className='lora-feature-one'>
                            <img src={longRange} className='feature-picture' />
                            <div className='feature-name'>
                                Long range connectivity
                            </div>
                            <div className='feature-meta'>
                                Upto 10km in rural areas
                            </div>
                        </div>
                        <div className='lora-feature-two'>
                            <img src={longBattery} className='feature-picture' />
                            <div className='feature-name'>
                                Long battery life
                            </div>
                            <div className='feature-meta'>
                                Upto 10 years on AA
                            </div>
                        </div>
                        <div className='lora-feature-three'>
                            <img src={costEffective} className='feature-picture' />
                            <div className='feature-name'>
                                Cost effective solution
                            </div>
                            <div className='feature-meta'>
                                Economical than Wifi or 4G
                            </div>
                        </div>
                    </div>

                </div>

                {/* what we do */}


            </div>
        )
    }
}

export default Home

