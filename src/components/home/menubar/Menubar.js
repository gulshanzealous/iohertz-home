import { Menu, Dropdown, Button } from 'semantic-ui-react'
import React,{Component} from 'react'
import './menubar.css'

class Menubar extends Component {
    state = { 
        activeItem: 'home',
        showMenu:false
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    onToggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }
    
      render() {
        const { activeItem } = this.state
        return (
            <div className='container' >
                {
                    document.documentElement.clientWidth > 1024 ? 
                    <div className='menu-container' >
                        <div className='item item-one'>
                            IOhertz
                        </div>
                        <div className='item-gap'>
                        </div>
                        <div className='item-menu'>
                            Products
                        </div>
                        <div className='item-menu'>
                            Solutions
                        </div>
                        <div className='item-menu'>
                            Contact Us
                        </div>
                    </div>
                    :
                    <div className='container'>
                        <div className='menu-container' >
                            <div className='item item-one'>
                                IOhertz
                            </div>
                            <div className='item-gap'>
                            </div>
                            <div className='item-menu' onClick={this.onToggleMenu} >
                                &#9661;
                            </div>
                        </div>
                        
                        {
                            this.state.showMenu &&    
                            <div className='menu-columnar' >
                                <div className='item-menu-column'>
                                    Products
                                </div>
                                <div className='item-menu-column'>
                                    Solutions
                                </div>
                                <div className='item-menu-column'>
                                    Contact Us
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