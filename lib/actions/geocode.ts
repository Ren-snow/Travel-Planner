interface GeocodeResult {
    country: string;
    formattedAddress: string;
}
type AddressComponent = {
    long_name: string;
    short_name: string;
    types: string[];
};

export async function getCountryFromCoordinates(
    lat: number,
    lng: number
): Promise<GeocodeResult> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
        throw new Error("Google Maps API key is missing");
    }
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch geocode data");
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
        return {
            country: "Unknown",
            formattedAddress: "Unknown location",
        };
    }
    const result = data.results[0];
    const countryComponent = result.address_components.find(
        (component: AddressComponent) => component.types.includes("country")
    );
    return {
        country: countryComponent.long_name || "Unknown",
        formattedAddress: result.formatted_address || "Unknown location",
    };
}
