'use client'

import { MapContainer, TileLayer } from "react-leaflet"
import GeotiffLayer from "./_components/leaflet/GeotiffLayer"
import 'leaflet/dist/leaflet.css'

const Home = () => {
  const geotiffPath = 'geo.tif'
  const mapAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const mapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

  return(
    <div style={{height: '1000px', width: '1500px'}}>
      <MapContainer style={{ height: '70%', width: '70%'}}
                    center={[0,0]}
                    zoom={9}
                    scrollWheelZoom={false}
      >
        <GeotiffLayer geotiffPath={geotiffPath} />
        <TileLayer
          attribution={mapAttribution}
          url={mapUrl}
        />
    </MapContainer>
    </div>
  )
}

export default Home
