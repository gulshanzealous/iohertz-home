// import { Menu, Dropdown, Button } from 'semantic-ui-react'
import React,{Component} from 'react'
import './menubar.css'
import logo from '../../../resources/images/logo100.png'

class Menubar extends Component {
    state = { 
        showMenu:false,
        activeItem:'home',
        pageWidth: document.documentElement.clientWidth
    }

    componentDidMount = () => {
        window.addEventListener("resize",this.setWidth)        
    }

    setWidth = () => {
        this.setState({
            pageWidth: document.documentElement.clientWidth
        })
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    onToggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }
    
    componentWillUnmount = () => {
        window.removeEventListener("resize",this.setWidth)
    }

    render() {
        const { activeItem, showMenu,pageWidth } = this.state
        console.log(pageWidth)
        return (
            <div className='container' >
                {
                    pageWidth > 1024 ? 
                    <div className='menu-container' >
                        <div className='item-one'>
                            <a href='#home-wrapper' className='home-anchor' >
                                <img src={logo} style={{ height:'45px',width:'45px' }} />
                                <span>IOhertz</span>
                            </a>
                        </div>
                        <div className='item-gap'>
                        </div>
                        <div className='item-menu'>
                            <a href="#products-section">
                                Products
                            </a>
                        </div>
                        <div className='item-menu'>
                            How it works
                        </div>
                        <div className='item-menu'>
                            <a href='#contact-us-large'>
                                Contact Us
                            </a>
                        </div>
                    </div>
                    :
                    <div className='container'>
                        <div className='menu-container' >
                            <div className='item-one'>
                                <a href='#home-wrapper' className='home-anchor' >
                                    <img src={logo} style={{ height:'30px',width:'30px',marginRight:'10px' }} />
                                    <span>IOhertz</span>
                                </a>
                            </div>
                            <div className='item-gap'>
                            </div>
                            <div className='item-menu' onClick={this.onToggleMenu} >
                                &#9661;
                            </div>
                        </div>
                        
                        {
                            showMenu &&    
                            <div className='menu-columnar' >
                                <div className='item-menu-column'>
                                    <a href="#products-section">
                                        Products
                                    </a>
                                </div>
                                <div className='item-menu-column'>
                                    How it works
                                </div>
                                <div className='item-menu-column'>
                                    <a href='#contact-us'>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div> 
        )
    }

}

export default Menubar



