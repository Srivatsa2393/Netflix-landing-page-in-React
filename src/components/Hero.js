import React, { Component } from 'react';
import HeroButton from './HeroButton';

class Hero extends Component{
    render() {
        return(
            <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
                <div className="content">
                    <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
                    <h2>Season 3 available now</h2>
                    <p>Narcos is probably the most intense and gritty TV show on the box right now. Not just because everyone’s up to the eyeballs in cocaine, 
                        but for it’s lightning-speed editing, witty characters and furious action sequences
                    </p>
                    <div className="button-wrapper">
                        <HeroButton primary={true} text="Watch now" />
                        <HeroButton primary={false} text="+ My list" />
                    </div>
                </div> 
                <div className="overlay"></div> 
            </div>
        );
    }
}

export default Hero;