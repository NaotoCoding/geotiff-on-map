'use client'

import Map from '@/app/_components/Map'

const Home = () => {
  return(
    <div style={{height: '1000px', width: '1500px'}}>
      <div style={{height: '70%', width: '70%'}}>
        <Map geotiffPath='geo.tif' />
      </div>
    </div>
  )
}

export default Home
