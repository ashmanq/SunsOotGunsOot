const locationList = [{ "temperature": 15, "location": "Glasgow" }, {"temperature": 10,
"location": "Edinburgh" }];

export default function getLocationTemperature(searchLocation: string) {

    const locationResult : {temperature: number, location: string} | undefined  = locationList.find((locationItem) => {
        return locationItem.location === searchLocation;
    });

    if (!locationResult) return locationResult;


    return locationResult.temperature;
}
