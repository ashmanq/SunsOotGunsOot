import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import getLocationTemperature from '../functions/getLocationTemperature';

describe('Rendering tests', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
      });

    // Test the rendering of the app result
})


// Test function that returns temperature
describe('Function tests', () => {
    // Return temperature test
    test('gets a temperature for location', () => {
        const locationTemperature = getLocationTemperature('Glasgow');
        expect(locationTemperature).toBeDefined();
        expect(locationTemperature).toEqual(15);
    })
    test('returns "undefined" when location not found', () => {
        const locationTemperature: number | undefined = getLocationTemperature('London');
        expect(locationTemperature).toBeUndefined();
    })
})

//
