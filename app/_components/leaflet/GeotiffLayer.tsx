'use client'

import loadGeotiff from "@/app/_utils/loadGeotiff"
import { useMap } from "react-leaflet"
import L, { Map } from "leaflet"
import Geotiff from "@/app/_types/Geotiff"
import { useEffect } from "react"

const writeGeotiffOnCanvasContext = (context: CanvasRenderingContext2D, geotiff: Geotiff) => {
  const red = geotiff.red
  const green = geotiff.green
  const blue = geotiff.blue

  const imageData = context.createImageData(geotiff.width, geotiff.height)
  const data = imageData.data
  for(let i = 0, j = 0; i < data.length; i += 4, j++) {
    if (red) { data[i] = red[j] }
    if (green) { data[i + 1] = green[j] }
    if (blue) { data[i + 2] = blue[j] }
    data[i + 3] = 255
  }
  context.putImageData(imageData, 0, 0)
}

const geotiffCanvas = (geotiff: Geotiff) => {
  const canvas = document.createElement('canvas')
  canvas.width = geotiff.width
  canvas.height = geotiff.height

  const context: CanvasRenderingContext2D = canvas.getContext('2d')!
  writeGeotiffOnCanvasContext(context, geotiff)
  return canvas
}

const putGeotiffCanvasOnLeaflet = (map: Map, geotiff: Geotiff) => {
  const imageCoordinates = geotiff.coordinates
  const canvas = geotiffCanvas(geotiff)
  const overlay = L.imageOverlay(
    canvas.toDataURL(), [imageCoordinates.southWest, imageCoordinates.northEast]
  )
  overlay.addTo(map)
}

const GeotiffLayer = (props: { geotiffPath: string }) => {
  const map = useMap()

  useEffect(() => {
    (async() => {
      const geotiff = await loadGeotiff(props.geotiffPath)
      map.panTo(geotiff.coordinates.center)
      putGeotiffCanvasOnLeaflet(map, geotiff)
    })()
  }, [map, props.geotiffPath])

  return null
}

export default GeotiffLayer
