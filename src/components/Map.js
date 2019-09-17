import React from 'react'
import ReactMapGL from 'react-map-gl';
import { Marker } from 'react-map-gl'

import bps from '../assets/img/logo/bps.png'

export default class Map extends React.Component{
    state = {
        viewport: {
          width: '100%',
          height: '50vh',
          latitude: 48.530969,
          longitude: -3.978124,
          zoom: 8
        }
      };
    
      render() {
        const { viewport } = this.state
        return (
          <ReactMapGL
            {... this.state}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            width={viewport.width}
            height={viewport.height}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            onViewportChange={(viewport) => this.setState({viewport})}
          >
            <Marker latitude={48.530969} longitude={-3.978124} offsetLeft={-20} offsetTop={-10}>
              <img src={bps} width="50" />
            </Marker>
          </ReactMapGL>
        );
      }
}