
import React,{Component} from 'react'
import './home.css'
import heart from '../../resources/images/heart.png'
import { Menubar } from '../../components';
import { Button } from 'semantic-ui-react'
 
class Home extends Component {

    state = {
        scrolledFromTop:false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll = (e) => {
        if(window.pageYOffset > 100){
            return this.setState({ scrolledFromTop:true })
        }
        this.setState({ scrolledFromTop:false })
    }

    render(){
        const headerClasses = `header-container ${this.state.scrolledFromTop? `scroller-white` : null}`
        return(
            <div>
                <div className='home-wrapper' >

                    <div className='cover-container'>
                    </div>

                    <div className={headerClasses}>
                        <Menubar />
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

                        <Button color='blue' size='big' className='intro-button' >
                            Explore with us
                        </Button>
                    </div>
                    
                    <div className='second-container' > 

                    </div>
                    
                    <div className='third-container' > 
                    </div>
                    
                    <div className='four-container' > 
                    </div>

                </div>

                <div className='desc-wrapper-one'>

                    <div className='products-heading'>
                        Our products and their impact
                    </div>


                    
                </div>

                

            </div>
        )
    }
}

export default Home






// Connectivity is the heartbeat of IoT

//                         At IOhertz, we create products which bring seamless connectivity to all devices.
//                         With industrial IoT and smart city applications as the immediate target, our gateway operates on the 
//                         revolutionary technologies like LoRaWAN to provide long range ( upto 15 km ) and long lasting ( upto 5 years )
//                         communications for a smarter, brighter and safer tomorrow.
//                         Explore with us.