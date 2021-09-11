import { useState, SyntheticEvent } from 'react';
import JumperOrGunsOot from '../components/JumperOrGunsOot';
import getLocationTemperature from '../functions/getLocationTemperature';

export default function CheckWeatherContainer() {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [selectedCity, setSelectedCity] = useState<string>('glasgow');
    const [city, setCity] = useState<string>('');

    const handleGetTemperatureButtonClick = async () => {
        // console.log('Button Clicked!');
        
        const weatherResult= await getLocationTemperature(selectedCity)
        if (weatherResult) {
            setTemperature(weatherResult);
            setCity(selectedCity);
        }

        // console.log('Weather Result: ', weatherResult);
        
    }

    const onLocationSelect = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        
        setSelectedCity((e.target as HTMLTextAreaElement).value);
    }
    return (
        <div>
            <h2>Shall I Get the Guns Oot?</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3>Result for City: {city}</h3>
            <JumperOrGunsOot temperature={temperature}/>
                <label style={{marginBottom: 10}} htmlFor="city">Choose a City:</label>

                <select style={{marginBottom: 10, fontSize:24, textAlign: 'center'}} onChange={(e) => onLocationSelect(e)} name="city" id="city">
                    <option value="Glasgow,uk">Glasgow</option>
                    <option value="Edinburgh,uk">Edinburgh</option>
                    <option value="London,uk">London</option>
                    <option value="Birmingham,uk">Birmingham</option>
                    <option value="Manchester,uk">Manchester</option>
                </select>
                <button style={{marginBottom: 10, fontSize:24}} onClick={() => handleGetTemperatureButtonClick()}>Check Weather</button>
            </div>

        </div>
    )
}
