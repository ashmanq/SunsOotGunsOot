import { useState, SyntheticEvent } from 'react';
import JumperOrGunsOot from '../components/JumperOrGunsOot';
import getLocationTemperature from '../functions/getLocationTemperature';
import CSS from 'csstype';

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
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <JumperOrGunsOot temperature={temperature}/>
                <label style={{marginBottom: 10}} htmlFor="city">Choose a City:</label>

                <select style={{marginBottom: 10, fontSize:24, textAlign: 'center'}} onChange={(e) => onLocationSelect(e)} name="city" id="city">
                    <option value="glasgow">Glasgow</option>
                    <option value="edinburgh">Edinburgh</option>
                </select>
                <button style={{marginBottom: 10, fontSize:24}} onClick={() => handleGetTemperatureButtonClick()}>Check Weather</button>
            </div>

        </div>
    )
}
