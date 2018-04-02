import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet';

import { Home, ContactUs } from './pages'
import { Menubar, Footer } from './components'

class App extends Component {
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

  render() {
    const headerClasses = `header-container ${this.state.scrolledFromTop? `scroller-white` : null}`
    
    return (
      <div className="App">
        <div className={headerClasses}>
            <Menubar />
        </div>

        <Helmet title="IOhertz" />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/what-we-do' component={Home} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;


