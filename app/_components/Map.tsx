import { MapContainer, TileLayer } from 'react-leaflet'
import GeotiffLayer from './Map/GeotiffLayer'
import 'leaflet/dist/leaflet.css'

type Props = {
  geotiffPath: string
}

const Map = (props: Props) => {
  const mapAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const mapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

  return(
    <MapContainer
      style={{ height: '70%', width: '70%'}}
      center={[0,0]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <GeotiffLayer geotiffPath={props.geotiffPath} />
      <TileLayer
        attribution={mapAttribution}
        url={mapUrl}
      />
    </MapContainer>
  )
}

export default Map
