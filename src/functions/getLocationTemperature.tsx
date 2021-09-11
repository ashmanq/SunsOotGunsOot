const locationList = [{ "temperature": 15, "location": "Glasgow" }, {"temperature": 10,
"location": "Edinburgh" }]; // Hardcoded at present

export default function getLocationTemperature(searchCity: string): number | null {

    const locationResult : {temperature: number, location: string} | undefined  = locationList.find((locationItem) => {
        return locationItem.location === searchCity;
    });

    if (!locationResult || locationResult === undefined) return null;


    return +locationResult.temperature;
}
