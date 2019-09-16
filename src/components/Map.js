import React from 'react'
import ReactMapGL from 'react-map-gl';

export default class Map extends React.Component{
    state = {
        viewport: {
          width: '100%',
          height: '50vh',
          latitude: -3.978124,
          longitude: 48.530969,
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
          />
        );
      }
}