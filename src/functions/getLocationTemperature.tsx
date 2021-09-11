const locationList = [{ "temperature": 15, "location": "glasgow" }, {"temperature": 10,
"location": "edinburgh" }]; // Hardcoded at present

const appId = '21f5543bda21508a39ec0f73b8ac32a5'; // Hard coded for etsting
const weatherUrl = new URL(`https://api.openweathermap.org/data/2.5/weather`); // Open Weather API URL

export default async function getLocationTemperature(searchLocation: string): Promise<number | undefined> {

    weatherUrl.searchParams.set('q', `${searchLocation}`);
    weatherUrl.searchParams.set('units', 'metric');
    weatherUrl.searchParams.set('appId', appId);

    let temperature: number | undefined = undefined;

    const weatherResult: {main: {temp: string}}= await fetch(weatherUrl.href).then(res => res.json()); 

    if(weatherResult.main && weatherResult.main.temp) temperature = +weatherResult.main.temp || undefined;


    return temperature;
}
