import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Tier1 from '../photos/wraith4.png';
import Tier2 from '../photos/octane.png';
import Tier3 from '../photos/loba3.png'
import styled from 'styled-components';
import '../layout/tier.css';

const Styles = styled.div `

`;

export const Tier =() =>(
    <div>
    <Container >
    <h1>Here's where we rank em top to bottom like we see fit.</h1>
    <p>Styles make fights and legends come in all playing styles and sizes.</p>
    <hr/>
    <p>There’s an Apex Legends character for every play style: Wraith and Mirage’s 
    stealthy and deceptive characteristics will appeal to the seasoned flanker
     who is out to deal serious damage to one key target, where the big, friendly tank,
      Gibraltar, will have to be prepared to put themselves in the firing line and
       shield their team from danger. Then there’s the medic, Lifeline: this legend
        will play the crucial role of maintaining the health of her squad.</p>
        </Container>
    
    <Carousel className="slider">
        <Carousel.Item>
        <img 
            className="d-block w-100"
            src={Tier1}
            alt=""/>
            <Carousel.Caption>
            <h3>Tier 1</h3>
            <p>top notch legends</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="d-block w-100"
            src={Tier2}
            alt=""/>
            <Carousel.Caption>
            <h3>Tier 2</h3>
            <p>serious pipe hitters</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="d-block w-100"
            src={Tier3}
            alt=""/>
            <Carousel.Caption>
            <h3>Tier 3</h3>
            <p>Just shoot yourself</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    </div>

);
