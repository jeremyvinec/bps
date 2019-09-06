import React from 'react'
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamVyZW15dmluZWMiLCJhIjoiY2swN3hsMnU0MDRwbzNjbW5maXYwY3ppOSJ9.5rK9IPnsM19j7rnnugXZrA'

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
        return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        );
      }
}