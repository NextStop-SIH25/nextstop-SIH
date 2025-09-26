import { Search, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// ====== Custom Icons ======
import busSvg from "../assets/bus-top.svg";        // top-view bus SVG
import poleSvg from "../assets/bus-stop-pole.svg"; // bus stop pole SVG
import userSvg from "../assets/user-location.png"; // user marker

const busIcon = L.icon({
  iconUrl: busSvg,
  iconSize: [45, 45],
  iconAnchor: [22, 22],
  popupAnchor: [0, -20],
});

const stopIcon = L.icon({
  iconUrl: poleSvg,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -25],
});

const userIcon = L.icon({
  iconUrl: userSvg,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -25],
});

const MapSection = () => {
  const navigate = useNavigate();
  const [selectedStop, setSelectedStop] = useState(null);

  // Hardcoded user location: R.H. Sapat COE, Nashik
  const userLocation = [20.00457044104736, 73.75921278981615];

  // Bus stops
  const stops = [
    { id: 1, name: "CBS Bus Stop", coords: [19.9975, 73.7898] },
    { id: 2, name: "Gangapur Road Stop", coords: [20.005, 73.75] },
    { id: 3, name: "College Road Stop", coords: [20.01, 73.77] },
  ];

  // Fake buses
  const [buses, setBuses] = useState([
    { id: "Bus 101", coords: [20.0, 73.78], direction: 0 },
    { id: "Bus 202", coords: [20.007, 73.76], direction: 90 },
  ]);

  // Animate buses (simulate live movement)
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses((prev) =>
        prev.map((bus) => ({
          ...bus,
          coords: [
            bus.coords[0] + (Math.random() - 0.5) * 0.001,
            bus.coords[1] + (Math.random() - 0.5) * 0.001,
          ],
          direction: (bus.direction + 20) % 360,
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Route from user to selected stop
  const route = selectedStop ? [userLocation, selectedStop.coords] : [];

  return (
    <div className="p-4 space-y-4">
      {/* ===== Map Container ===== */}
      <div className="relative h-[60vh] rounded-xl overflow-hidden shadow border border-gray-200">
        <MapContainer center={userLocation} zoom={14} className="h-full w-full z-0">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap contributors'
          />
          <TileLayer    
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png"
          />

          {/* User marker */}
          <Marker position={userLocation} icon={userIcon}>
            <Popup>
              <b>You are here</b>
            </Popup>
          </Marker>

          {/* Bus stops */}
          {stops.map((stop) => (
            <Marker
              key={stop.id}
              position={stop.coords}
              icon={stopIcon}
              eventHandlers={{
                click: () => setSelectedStop(stop),
              }}
            >
              <Popup>
                <b>{stop.name}</b>
                <br />
                <button
                  onClick={() => setSelectedStop(stop)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Route to this stop
                </button>
              </Popup>
            </Marker>
          ))}

          {/* Buses */}
          {buses.map((bus) => (
            <Marker
              key={bus.id}
              position={bus.coords}
              icon={busIcon}
              rotationAngle={bus.direction}
              rotationOrigin="center"
            >
              <Popup>
                <b>{bus.id}</b> <br />
                En route 🚍
              </Popup>
            </Marker>
          ))}

          {/* Route line */}
          {route.length > 0 && (
            <Polyline
              positions={route}
              color="blue"
              weight={4}
              opacity={0.7}
              dashArray="6,8"
            />
          )}
        </MapContainer>
      </div>

      {/* ===== Route Input Section ===== */}
      <div className="space-y-3">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-sm text-muted-foreground" />
          <input
            type="text"
            placeholder="From: Your location"
            className="route-input pl-12"
            aria-label="Starting location"
            value="R.H. Sapat COE"
            readOnly
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-sm text-muted-foreground" />
          <input
            type="text"
            placeholder="To: Where to?"
            className="route-input pl-12"
            aria-label="Destination"
          />
        </div>

        {/* ===== Buttons ===== */}
        <div className="flex space-x-3">
          <button
            onClick={() => navigate("/track-bus")}
            className="btn-primary flex-1 flex items-center justify-center space-x-2"
          >
            <Search className="icon-sm" />
            <span>Find Bus</span>
          </button>

          <button
            onClick={() => navigate("/schedule")}
            className="btn-secondary flex items-center justify-center space-x-2 px-6"
          >
            <Calendar className="icon-sm" />
            <span>Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;