import { Routes, Route, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import PropertyList from "./PropertyCards/PropertyList";
import SearchBar from "./components/SearchBar.jsx";
import propertiesData from "./PropertyCards/propertiesData";
import { filterProperties } from "./PropertyCards/filterproperties";


function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isHomePage = pathname === "/";
  const searchLocation = searchParams.get("location") ?? "";

  function handleSearch(location, type) {
    const query = new URLSearchParams({ location: location.trim() });
    navigate({ pathname: `/${type}`, search: `?${query.toString()}` });
  }

  return (
    <>
      <div
        className={isHomePage ? "bg-cover bg-center" : "bg-slate-100"}
        style={isHomePage ? { backgroundImage: "url('/images/house.jpg')" } : undefined}
      >
        <div
          className={`px-4 py-5 md:px-8 ${
            isHomePage ? "bg-black/40 text-white" : "text-slate-900"
          }`}
        >
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={
                <div className="flex min-h-[80vh] flex-col justify-center">
                  <p className="mb-4 text-sm font-medium">
                    Your Trusted Real Estate Partner
                  </p>
                  <h1 className="max-w-2xl text-5xl font-bold">
                    Find Your Dream Home
                  </h1>
                  <p className="mt-4 max-w-xl text-lg">
                    Discover the perfect property for your lifestyle.
                  </p>
                  <SearchBar onSearch={handleSearch} />
                </div>
              } />
              <Route path="/rent" element={null} />
              <Route path="/about" element={<div className="py-20 text-center text-3xl font-bold">About Page</div>} />
              <Route path="/contact" element={<div className="py-20 text-center text-3xl font-bold">Contact Page</div>} />
              <Route path="/buy" element={null} />
            </Routes>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<PropertyList properties={propertiesData} />} />
        <Route
          path="/buy"
          element={
            <PropertyList
              properties={filterProperties(propertiesData, searchLocation, "buy")}
              title="Properties for Sale"
              description={`Homes for sale${searchLocation ? ` in ${searchLocation}` : ""}`}
            />
          }
        />
        <Route
          path="/rent"
          element={
            <PropertyList
              properties={filterProperties(propertiesData, searchLocation, "rent")}
              title="Properties for Rent"
              description={`Homes for rent${searchLocation ? ` in ${searchLocation}` : ""}`}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
