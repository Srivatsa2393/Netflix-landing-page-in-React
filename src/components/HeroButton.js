import React, { Component } from 'react';

export default class HeroButton extends Component{
    render() {
        return(
            <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
}