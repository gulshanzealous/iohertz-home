import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 28.6543939, lng: 77.2655935 }}
  >
    {props.isMarkerShown && <Marker position={{ lat:  28.6543939, lng: 77.2655935 }} />}
  </GoogleMap>
))

// AIzaSyDezPol27OKrndb5r6_UxVouCw-eQAJMQY

class LocationMap extends React.Component {

    render(){
        return(
            <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, zIndex:'-1' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default LocationMap