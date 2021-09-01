import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Features = () => {
    return (
        <FeatureContainer>
            <h1>Pizza del Día</h1>
            <p>Tocino, tomate cherry, albahaca, queso, champiñon.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Features
