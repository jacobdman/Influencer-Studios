import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render () {
        return (
            <div className="HeaderBody" >
                <div className="HeaderLeft" >
                    <img className="HeaderLogo" src={require('../../Assets/LogoOnly.png')}/>
                    <img className="HeaderText" src={require('../../Assets/LogoTitle.png')}/>
                </div>
                <div className="HeaderRight">
                        <h3>Home</h3>
                        <h3>Gallery</h3>
                        <h3>Examples</h3>
                        <h3>About Us</h3>
                        <h3>Testimonials</h3>
                </div>
            </div>
        )
    }
}