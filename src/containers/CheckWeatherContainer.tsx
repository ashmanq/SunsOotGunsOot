import { useState, useRef, SyntheticEvent } from 'react';
import JumperOrGunsOot from '../components/JumperOrGunsOot';
import getLocationTemperature from '../functions/getLocationTemperature';

export default function CheckWeatherContainer() {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [city, setCity] = useState<string>('glasgow');

    const handleGetTemperatureButtonClick = async () => {
        console.log('Button Clicked!');
        
        const weatherResult= await getLocationTemperature(city)
        if (weatherResult) setTemperature(weatherResult);

        console.log('Weather Result: ', weatherResult);
        
    }

    const onLocationSelect = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        console.log('Location Selected!');
        
        setCity((e.target as HTMLTextAreaElement).value);
    }
    return (
        <div>
            <h2>Shall I Get the Guns Oot?</h2>
            <div>
                <label htmlFor="city">Choose a City:</label>

                <select onChange={(e) => onLocationSelect(e)} name="city" id="city">
                    <option value="glasgow">Glasgow</option>
                    <option value="edinburgh">Edinburgh</option>
                </select>
                <button onClick={() => handleGetTemperatureButtonClick()}>Check Weather</button>
                <JumperOrGunsOot temperature={temperature}/>
            </div>

        </div>
    )
}
