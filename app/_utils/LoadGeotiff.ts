import { fromUrl } from 'geotiff'
import Geotiff from '../_types/Geotiff'

const loadGeotiff = async (geotiffPath: string): Promise<Geotiff> => {
  const tiff = await fromUrl(geotiffPath)
  const image = await tiff.getImage()
  const rasters = await image.readRasters()
  const bounds = image.getBoundingBox()
  return {
    red: rasters[0] as Uint8Array,
    green: rasters[1] as Uint8Array,
    blue: rasters[2] as Uint8Array,
    width: rasters.width,
    height: rasters.height,
    coordinates: {
      southWest: [bounds[1], bounds[0]],
      northWest: [bounds[3], bounds[0]],
      northEast: [bounds[3], bounds[2]],
      southEast: [bounds[1], bounds[2]],
      center: [(bounds[1] + bounds[3]) / 2, (bounds[0] + bounds[2]) / 2]
    }
  }
}

export default loadGeotiff
