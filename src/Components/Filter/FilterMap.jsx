import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useAppContext } from '../../context/store';
import { useNavigate } from 'react-router';

function FilterMap(props) {
    const [showMap, setShowMap] = useState(false);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const [selectedPlace, setSelectedPlace] = useState({});
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);
    const { state, actions } = useAppContext();
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    const locations = [
        { lat: 40.7128, lng: -74.006 }, // Update with your actual latitudes and longitudes
        { lat: 34.0522, lng: -118.2437 },
    ];

    const handleShowMap = () => {
        setMapCenter(locations[0]);
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    const handleMapChange = (mapProps, map) => {
        setMapCenter({ lat: map.center.lat(), lng: map.center.lng() });
    };

    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarkerHover = (props, marker, e, m) => {
        console.log(m);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setActiveMarker(marker);
            setSelectedPlace(m);
            setInfoWindowVisible(true);
        }, 300); // Adjust the delay time as needed
    };

    const handleMarkerLeave = () => {
        clearTimeout(timeoutRef.current);
        setInfoWindowVisible(false);
    };

    return (
        <div>
            <div className='w-[250px] h-[200px] bg-slate-600 rounded-lg shadow-md'>
                <div className='flex flex-col justify-center pt-14 items-center'>
                    <FaMapMarkerAlt className='text-[35px] font-[700] text-[#2d6adc]' />
                    <button
                        onClick={handleShowMap}
                        className='mt-2 bg-[#2d6adc] px-3 py-2 text-slate-50 rounded-md'
                    >
                        Show on Map
                    </button>
                </div>
            </div>
            <Modal open={showMap} onClose={handleCloseMap}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        // boxShadow: 24,
                        // p: 4,
                    }}
                >
                    <div style={{ height: '600px', width: '100%' }}>
                        <Map
                            google={props.google}
                            center={mapCenter}
                            initialCenter={mapCenter}
                            zoom={8}
                            onDragend={handleMapChange}
                        >
                            {state.hotel.map((m, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: m.latitude, lng: m.longitude }}
                                    onMouseover={(props, marker, e) => handleMarkerHover(props, marker, e, m)}
                                    onMouseout={handleMarkerLeave}
                                    onClick={() => navigate(`/hoteldetails/${m._id}`)}
                                    name={m.name}
                                />
                            ))}
                            <InfoWindow
                                marker={activeMarker}
                                visible={infoWindowVisible}
                                onClose={() => setInfoWindowVisible(false)}
                            >
                                <div>
                                    <h3>{selectedPlace.propertyName}</h3>
                                    <p>{selectedPlace.description}</p>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0' // Replace with your Google Maps API key
})(FilterMap);
