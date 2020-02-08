import React from 'react';
import GoogleMapReact from 'google-map-react';

export default (props) => {
  return (
    <div style={{height : '100%'}} >
        <GoogleMapReact
         defaultCenter = {{lat : props.lat, lng : props.lon}}
         defaultZoom = {12}
        >
        </GoogleMapReact>
    </div>
  );
}