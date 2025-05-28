"use client";
import { useEffect, useRef } from "react";
import L, { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon
const customIcon = L.icon({
  iconUrl: "/icons/route.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

export default function MapView() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      const map = L.map(mapRef.current).setView([14.1707, 121.2436], 12); // 📍 Los Baños

      leafletMapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
    }
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    />
  );
}
