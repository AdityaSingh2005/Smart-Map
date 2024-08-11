import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoute } from '@/redux/slice/MapComponentSlice';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(module => module.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(module => module.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(module => module.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(module => module.Popup), { ssr: false });

const MapComponent = () => {
  const dispatch = useDispatch();
  const { startPoint, endPoint, route } = useSelector((state) => state.routing);

  useEffect(() => {
    if (startPoint && endPoint) {
      dispatch(fetchRoute({ startPoint, endPoint }));
    }
  }, [dispatch, startPoint, endPoint]);

  return (
    <MapContainer style={{ height: '500px', width: '100%' }} center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {route.map((point: [number, number], index: number) => (
        <Marker key={index} position={point}>
          <Popup>
            Route point {index + 1}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
