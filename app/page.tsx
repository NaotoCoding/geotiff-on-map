'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Home = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('./_components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )

  return(
    <div style={{height: '1000px', width: '1500px'}}>
      <div style={{height: '70%', width: '70%'}}>
        <Map geotiffPath='geo.tif' />
      </div>
    </div>
  )
}

export default Home
