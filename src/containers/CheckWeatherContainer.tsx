import { useState, useRef, SyntheticEvent } from 'react';
import JumperOrGunsOot from '../components/JumperOrGunsOot';
import getLocationTemperature from '../functions/getLocationTemperature';

export default function CheckWeatherContainer() {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [city, setCity] = useState<string>('glasgow');

    const handleGetTemperatureButtonClick = async () => {
        const weatherResult= await getLocationTemperature(city)
        if (weatherResult) setTemperature(weatherResult);
    }

    const onLocationSelect = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        setCity((e.target as HTMLTextAreaElement).value);
    }
    return (
        <div>
            <h2>Shall I Get the Guns Oot?</h2>
            <div>
                <label htmlFor="city">Choose a City:</label>

                <select onSelect={(e) => onLocationSelect(e)} name="city" id="city">
                    <option value="glasgow,uk">Glasgow</option>
                    <option value="edinburgh,uk">Edinburgh</option>
                </select>
                <button onClick={() => handleGetTemperatureButtonClick()}>Check Weather</button>
                <JumperOrGunsOot temperature={temperature}/>
            </div>

        </div>
    )
}
