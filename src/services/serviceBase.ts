
export const stopLookup = async() => {
    const response = await fetch("https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any");

    const data = await response.json();
    console.log(data);

    return data;
};

export const journeyPlanner = async() => {
    const response = await fetch("https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3");

    const data = await response.json();
    console.log(data);

    return data;
};