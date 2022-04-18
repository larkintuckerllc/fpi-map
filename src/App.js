import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Indicator from './Indicator';
import "./App.css";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.root__title}>FPI Map</div>
      <MapContainer center={[0, 0]} zoom={3} className={styles.root__map}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {window.fpiIndicators.map(indicator => (
          <Marker key={indicator.id} position={[indicator.latitude, indicator.longitude]}>
            <Popup>
              <Indicator
                community={indicator.community}
                ecological={indicator.ecological}
                economic={indicator.economic}
                image={indicator.image}
                link={indicator.link}
                name={indicator.name}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
