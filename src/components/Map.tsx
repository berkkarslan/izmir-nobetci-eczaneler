/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useServices } from "../services";

const Map = () => {
  const map = useMap();
  const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          map.flyTo([position.coords.latitude, position.coords.longitude], 15);
        },
        () => {}
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return null;
};

const Mapping = () => {
  const [eczanes, setEczanes] = useState<Array<EczaneObject>>([]);
  const [location, setLocation] = useState<leaflet.LatLngExpression>([0, 0]);

  const { api } = useServices();
  const leafletIcon = leaflet.icon({
    iconUrl:
      require("../assets/images/eczane.png"),
    shadowUrl:
      require("../assets/images/marker-shadow.png"),
    iconSize: [37, 37],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const myLocation = leaflet.icon({
    iconUrl:
      require("../assets/images/marker-icon-2x-blue.png"),
    shadowUrl:
      require("../assets/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const getData = () => {
    api.server.get("/ibb/nobetcieczaneler").then((response) => {
      setEczanes(response);
    });
  };

  useEffect(() => {
    const findMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        });
      }
    };
    findMyLocation();
    getData();
  }, []);

  return (
    <div id='map'>
      <MapContainer
        center={[38.423733, 27.142826]}
        zoom={13}
        style={{ height: "100vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {eczanes.map((item: EczaneObject) => {
          return (
            <Marker
              key={item.Telefon}
              icon={leafletIcon}
              position={[parseFloat(item.LokasyonX), parseFloat(item.LokasyonY)]}
            >
              <Popup>
                <div className='popup'>
                  <h3>{item.Adi}</h3>
                  <p>{item.Adres}</p>
                  <div>
                  <a href={`tel:${item.Telefon}`}>Telefon Ara</a> <br />
                  <a
                    target='_blank'
                    href={`https://www.google.com/maps/dir//${item.LokasyonX}, ${item.LokasyonY}`} rel="noreferrer"
                  >
                    Yol Tarifi Al
                  </a>
                  </div>
                  
                </div>
              </Popup>
            </Marker>
          );
        })}
        <Marker icon={myLocation} position={location}>
          <Popup>
            <span>Buradasınız.</span>
          </Popup>
        </Marker>
        <Map />
      </MapContainer>
    </div>
  );
};

export default Mapping;
