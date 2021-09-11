import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

import getLocationTemperature from '../functions/getLocationTemperature';
import JumperOrGunsOot from '../components/JumperOrGunsOot';

describe('Rendering tests', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
      });

    // Test the rendering of the app result
    test('renders result when button clicked to get temperature', () => {
        render(<JumperOrGunsOot temperature={15}/>);
        const textElement = screen.getByText(/Suns Oot Guns Oot!/)
        expect(textElement).toBeInTheDocument();
    })
})


// Test function that returns temperature
describe('Function tests', () => {
    // Return temperature test
    test('gets a temperature for location', () => {
        const locationTemperature = getLocationTemperature('glasgow');
        expect(locationTemperature).toBeDefined();
        expect(locationTemperature).toEqual(15);
    })
    test('returns "undefined" when location not found', () => {
        const locationTemperature: number | null = getLocationTemperature('London');
        expect(locationTemperature).toBeNull();
    })
})

//
