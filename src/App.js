import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Indicator from './Indicator';
import "./App.css";

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{height: '500px'}}>
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <Indicator
            community={2}
            ecological={3}
            economic={4}
            image="http://localhost:3000/1.jpeg"
            link="https://www.google.com"
            name="testing one two three, testing"
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
