"use client";

import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

interface Location {
  id: number;
  name: string;
  coords: { lng: number; lat: number };
  address: string;
  googleMapsUrl: string;
  icon: React.ReactNode;
}


const locations = [
  {
    id: 1,
    name: "Extreme Adventuring Cancún",
    coords: { lng: -87.078842, lat: 20.875106 },
    address: "Leona Vicario KM 19.1, Puerto Morelos",
    googleMapsUrl: "https://maps.google.com/maps?q=Extreme+Adventure+Cancun",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Snorkeling Adventure",
    coords: { lng: -86.8772, lat: 20.8441 },
    address: "Rafael E. Melgar, Puerto Morelos",
    googleMapsUrl: "https://maps.google.com/maps?q=Snorkel+Adventure+Cancun",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Beach Taco Tour",
    coords: { lng: -86.8768, lat: 20.8468 },
    address: "Rafael E. Melgar, Puerto Morelos",
    googleMapsUrl: "https://maps.google.com/maps?q=Beach+Taco+Tour+Puerto+Morelos",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
  
];

export default function InteractiveMap() {
  const [selectedPlace, setSelectedPlace] = useState<Location | null>(null);

  const API_KEY = "f7d260a6-b7fc-4b60-84ee-e5dc4d2a2965";

  return (
    <section className="w-full h-[600px] relative border-t border-gray-100 bg-white overflow-hidden">
      <Map
        initialViewState={{
          longitude: -86.97,
          latitude: 20.86,
          zoom: 11
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={`https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${API_KEY}`}
      >
        <NavigationControl position="top-right" />

        {locations.map((loc) => (
          <React.Fragment key={loc.id}>
            <Marker 
              longitude={loc.coords.lng} 
              latitude={loc.coords.lat} 
              anchor="bottom"
              onClick={e => {
                e.originalEvent.stopPropagation();
                setSelectedPlace(loc);
              }}
            >
              <div className={`cursor-pointer transform transition-all duration-300 hover:scale-110 ${selectedPlace?.id === loc.id ? 'scale-110' : ''}`}>
                <div className="bg-primary text-white p-2 rounded-xl shadow-xl border-2 border-white">
                  {loc.icon}
                </div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary mx-auto -mt-1" />
              </div>
            </Marker>

            {selectedPlace && selectedPlace.id === loc.id && (
              <Popup
                longitude={loc.coords.lng}
                latitude={loc.coords.lat}
                anchor="bottom"
                offset={45}
                closeButton={false}
                onClose={() => setSelectedPlace(null)}
                className="z-50"
              >
                <div className="p-4 min-w-[200px] font-sans bg-white">
                  <h4 className="font-bold text-dark text-lg mb-1 uppercase tracking-wider">{loc.name}</h4>
                  <p className="text-[11px] text-gray-400 leading-tight mb-4 uppercase tracking-widest">{loc.address}</p>
                  <a 
                    href={loc.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-dark text-white text-[10px] px-6 py-3 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 group"
                  >
                    <span>Get Directions</span>
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </Popup>
            )}
          </React.Fragment>
        ))}
      </Map>
      <style jsx global>{`
        .maplibregl-popup-content {
          padding: 0 !important;
          border-radius: 1.5rem !important;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15) !important;
          overflow: hidden;
          border: 1px solid #f3f4f6;
        }
        .maplibregl-popup-anchor-bottom .maplibregl-popup-tip {
          border-top-color: white !important;
        }
        .maplibregl-canvas {
          filter: grayscale(0.2) contrast(1.1);
        }
      `}</style>
    </section>
  );
}