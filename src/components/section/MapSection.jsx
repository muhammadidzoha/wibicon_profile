import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = () => {
  const position = [-6.986642448696868, 107.63730350395522];

  return (
    <section id="location" className="pt-2 pb-20 px-4 lg:px-8 bg-gray-50">
      <div className="container mx-auto">

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-125 w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={position}
              eventHandlers={{
                click: () => {
                  window.open(
                    `https://www.google.com/maps?q=${position[0]},${position[1]}`,
                    "_blank"
                  );
                },
              }}
            >
              <Popup>
                <strong>Wibicon</strong>
                <br />
                Bandung, Indonesia
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
