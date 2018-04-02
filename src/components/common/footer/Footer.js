
import React,{Component} from 'react'
import './footer.css'
import logo from '../../../resources/images/logo100.png'

import { Button } from 'semantic-ui-react'
 
class Footer extends Component {


    render(){
        return(
            <div>
                
                <div className='footer' id='contact-us' >
                    <div className='company-markers-footer' >
                        <img src={logo} className='footer-logo' />
                        <div className='company-name-footer' > IOhertz Technologies Private Limited </div>
                    </div>
                    <div className='contact-details'>
                        <div className='phone'> +91-8447023040  | </div>
                        <div className='email'> contact@iohertz.com </div>
                    </div>
                </div>
                    
                
                <div className='footer-large' id='contact-us-large' >
                    <div className='company-markers-footer' >
                        <img src={logo} className='footer-logo' />
                        <div className='company-name-footer' > IOhertz Technologies Private Limited </div>
                    </div>
                    <div className='contact-details'>
                        <div className='phone'> +91-8447023040  | </div>
                        <div className='email'> contact@iohertz.com </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default Footer

