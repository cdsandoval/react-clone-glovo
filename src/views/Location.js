/** @jsx jsx */
import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import { useRestId, useLocationRestaurant, useUser } from "../selector";
import HeaderBar from "../components/HeaderBar";

const container = {
  height: "80vh"
};

const header = {
  height: "20vh"
};

function Ubication() {
  const [position, setPosition] = React.useState([-12.1402803, -76.9881638]);
  const [zoomState, setZoomState] = React.useState(16);

  const restid = useRestId();
  const address = useLocationRestaurant(restid);
  const mapRef = React.useRef();

  const user = useUser();
  let adr = [];

  address.map(value => {
    adr.push(value.address.latitud);
    adr.push(value.address.longitud);
  });

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  // const user = useUser();
  // if (!user) return <Redirect to="login" noThrow />;
  if (!user.name) return <Redirect to="/login" noThrow />;

  const handleOnZoom = map => {
    setZoomState(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <>
      <HeaderBar titleBar="LOCATION" routePath="/" css={{ header }} />
      <Map
        css={container}
        center={position}
        zoom={zoomState}
        ref={mapRef}
        onzoomend={handleOnZoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            You are here!
            <span role="img" aria-label="emoji dot position">
              👨‍🎤
            </span>
          </Popup>
        </Marker>
        <Marker position={adr}>
          <Popup>
            You are here!
            <span role="img" aria-label="emoji dot position">
              👨‍🎤
            </span>
          </Popup>
        </Marker>
        {/* <MarkerRestaurant id={id} /> */}
      </Map>
    </>
  );

  return map;
}

export default Ubication;
