import React, { Component } from 'react';
import { Header , Segment  } from 'semantic-ui-react'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <Segment raised id="chatBanner">
                <Header id="header" as="h4" >
                Welcome to Braavos
                </Header>
                </Segment>
        );
    }
}

export default Banner;