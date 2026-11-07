function PropertyCard({ property }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {property.type === "rent" ? "For Rent" : "For Sale"}
          </span>
          <span className="text-xs text-slate-500">{property.area}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-800">{property.title}</h3>
        <p className="mt-1 text-sm text-slate-500">📍 {property.location}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-700">{property.price}</span>
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            🏠 {property.bhk}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

