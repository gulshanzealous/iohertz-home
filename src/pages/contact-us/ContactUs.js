
import React,{Component} from 'react'
import './contact-us.css'
import logo from '../../resources/images/logo100.png'
import {LocationMap} from '../../components'
import { Icon } from 'semantic-ui-react'

class ContactUs extends Component {


    render(){
        return(
            <div>
                <div className='section-one' >
                    <div className='contact-heading'>
                        Join us for a coffee ?
                    </div>

                    <div className='contact-address' >
                        <span className='contact-address-value' >
                        F-303,  AIACTR-IRF,  
                        <br/>
                        AIACTR, Geeta colony, 
                         <br/>
                        Delhi - 110031
                         <br />
                        India
                        <br/> <br/>
                        </span>

                        <span className='contact-phone' >
                            <Icon name='phone' size='big' />
                            <span>+91-8447023040 </span>
                        </span>
                        <br/>
                        <span className='contact-email'>
                            <Icon name='mail' size='large' />
                            <span>contact@iohertz.com </span>
                        </span>
                    </div>

                    <div className='contact-map' >
                        <LocationMap />
                    </div>

                </div>
                

                <div className='section-two'>
                    
                </div>

                <div className='section-three'>
                </div>
            </div>
        )
    }
}

export default ContactUs

