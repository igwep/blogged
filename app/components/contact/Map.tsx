/* eslint-disable @typescript-eslint/no-explicit-any */
/* "use client";
import React,{useEffect, useState} from 'react'

const Map = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) return null; 
  return (
    <div className='w-full'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2452207115193!2d3.1758932999999994!3d6.4906023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b83f8f6585fb5%3A0x724bc88ccf7fc0df!2s6%20Gospel%20Rd%2C%20Ojo%2C%20Lagos%20102101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742480161428!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map */
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

//  Dynamically import React-Leaflet components to fix SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

const LeafletMap = () => {
  const position: [number, number] = [6.742387873824129, 3.065556938145879]; // Lagos, Nigeria

  const [isClient, setIsClient] = useState(false);
  const [L, setLeaflet] = useState<any>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
  
    //  Import Leaflet dynamically inside useEffect
    import("leaflet").then((leaflet) => {
      setLeaflet(leaflet);
      setCustomIcon(
        new leaflet.Icon({
          iconUrl: "/svg/map-marker-svgrepo-com.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        })
      );
    });
  }, []);

  if (!isClient || !L || !customIcon) {
    return <div className="w-full h-[500px] bg-gray-800 flex items-center justify-center text-white">Loading map...</div>;
  }

  return (
    <div className="w-full z-30 h-[500px]">
      <MapContainer center={position} zoom={13} scrollWheelZoom className="h-full w-full">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
        />

        <Marker position={position} icon={customIcon}>
          <Popup>📍 <b>You&apos;re here!</b> <br /> (Lagos, Nigeria)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;





