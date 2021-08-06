import React, { Component } from 'react';
import ReactMapGl, {NavigationControl, Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';


const mapboxToken = 'pk.eyJ1Ijoic3ViYXN0aGkiLCJhIjoiY2tyYTB3Y21mMDFkbTJ2bmlxZ3U4d200ayJ9.wE8uEd7KkMt8ZJ8qp9ezQg'
class Maps extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 9.66845,
        longitude: 80.00742,
        zoom: 11
      }
    }
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }
  handleViewportChange(viewport) {
    this.setState(prevState => ({
      viewport: {...prevState.viewport, ...viewport}
    }))
  }
  render() {
    const navStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '10px'
      };
    return (
      <ReactMapGl
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        
      >
        <Marker latitude={9.75} longitude={80.1667 } offsetLeft={-20} offsetTop={-10}>
        <div className= "mark">You are here </div>
      </Marker>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
        </div>
        </ReactMapGl>
    )
  }
}

export default Maps;
