const locationList = [{ "temperature": 15, "location": "glasgow" }, {"temperature": 10,
"location": "edinburgh" }]; // Hardcoded at present

export default function getLocationTemperature(searchCity: string): number | null {

    const locationResult : {temperature: number, location: string} | undefined  = locationList.find((locationItem) => {
        return locationItem.location === searchCity;
    });

    if (!locationResult || locationResult === undefined) return null;


    return +locationResult.temperature;
}
