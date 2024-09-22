'use client'

import React from 'react'
import Map from '../components/Map'
import 'leaflet/dist/leaflet.css'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-top p-8'>
      <h1 className='text-4xl font-bold mb-8'>Hello World</h1>
      <div style={{ height: '400px', width: '100%' }}>
        <Map />
      </div>
    </div>
  )
}
