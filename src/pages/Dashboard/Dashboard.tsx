import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import GoogleMapReact from 'google-map-react';

type MarkerComp = {
    text: String,
    lat : Number,
    lng: Number
}

const AnyReactComponent = ({ text }: MarkerComp) => <div>
    <img src={require("../../assets/station.png")} alt="station logo" style={{height:'30px',width:'30px'}} />
    </div>;
const Dashboard = () => {

    const defaultProps = {
        center: {
            lat: 22.6030056,
            lng: 88.4159157
        },
        zoom: 11
    };
  return (
    <div>
      <Sidebar activeMenu="Dashboard" />
      <div style={{ marginLeft: "16rem" }}>
        <Header />
        <div style={{ height: '60vh', width: '80%',marginLeft:'10%',marginTop:10, alignSelf:'center', borderRadius:10,overflow:'hidden' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyATzOQBhRyutho2AlgGTQnsybhNOkuACzI" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                lat={22.6030056}
                lng={88.4159157}
                text="My Marker"
                />
            </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
