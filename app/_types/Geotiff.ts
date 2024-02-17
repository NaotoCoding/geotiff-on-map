type Geotiff = {
  red: Uint8Array
  green: Uint8Array
  blue: Uint8Array
  width: number
  height: number
  coordinates: {
    southWest: [number, number]
    northWest: [number, number]
    northEast: [number, number]
    southEast: [number, number]
    center: [number, number]
  }
}

export default Geotiff
