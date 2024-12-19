"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {

    const mapRef = React.useRef(null)

    useEffect(() => {
        const initMap = async() => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            });

            const { Map } = await loader.importLibrary("maps");

            const { Marker } = await loader.importLibrary("marker");

            const coordinates = {
                lat: 40.7588327,
                lng: -73.8277072
            }

            const mapOptions: google.maps.MapOptions = {
                center: coordinates,
                zoom: 17,
                mapId: "MY_NEXTJS_MAPID"
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker = new Marker({
                map: map,
                position: coordinates
            })

        }

        initMap();

    }, []);
    
    return (
        <div style={{height: "465px", width: "400px"}} ref={mapRef} />
    );
}