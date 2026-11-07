import PropertyCard from "./PropertyCard";

function PropertyList({
  properties,
  title = "Featured Properties",
  description = "Explore our handpicked properties for you",
}) {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-800">
          {title}
        </h2>
        <p className="mb-10 text-center text-slate-500">{description}</p>

        {properties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            No properties found. Try a different location or listing type.
          </p>
        )}
      </div>
    </section>
  );
}

export default PropertyList;
