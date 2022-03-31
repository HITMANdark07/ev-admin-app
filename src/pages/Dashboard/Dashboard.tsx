import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Dashboard = () => {

    const [defaultProps, setDefaultProps] = useState({
        center: {
            lat: 22.6036455,
            lng: 88.4350086
        },
        zoom: 18.88
    });
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyATzOQBhRyutho2AlgGTQnsybhNOkuACzI&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ height: `400px`, width:`90%`, marginLeft:`5%`, borderRadius:8, overflow:'hidden' }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )(props => 
        (
          <GoogleMap defaultZoom={defaultProps.zoom} defaultCenter={defaultProps.center}>
              <Marker position={defaultProps.center} />
          </GoogleMap>
        )
    );

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setDefaultProps(prevProps => ({
          ...prevProps,
          center:{
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }))
      },(err) => {
        if(err.code === 1) {
          alert("Error: Location Access is denied!");
       } else if( err.code === 2) {
          alert("Error: Position is unavailable!");
       }
      },{
        timeout:60000
      })
    },[])
  return (
    <div>
      <Sidebar activeMenu="Dashboard" />
      <div style={{ marginLeft: "16rem" }}>
        <Header />
        <div style={{width:'90%', marginLeft:'5%'}}>
          <div className="font-bold text-lg tracking-wide my-2">Devices Nearby</div>
        </div>
        <MyMapComponent  />
        
      </div>
    </div>
  );
};

export default Dashboard;
