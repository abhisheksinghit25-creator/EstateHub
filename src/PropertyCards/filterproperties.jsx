
export function filterProperties(properties, location, type) {

    const searchlocation = location.trim().toLowerCase();

    return properties.filter((property) => {
        const matchesLocation = property.location.toLowerCase().includes(searchlocation);
        const matchesType = type === "all" || property.type.toLowerCase() === type.toLowerCase();
        return matchesLocation && matchesType;
    })

}