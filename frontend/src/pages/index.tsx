import MapComponent from '@/components/MapComponent/MapComponent';
import StartEndModal from '@/components/StartEndModal/StartEndModal';
import TimeDistanceTracker from '@/components/TimeDistanceTracker/TimeDistanceTracker';

const HomePage = () => {
  return (
    <div>
      <MapComponent />
      <StartEndModal />
      <TimeDistanceTracker />
    </div>
  );
};

export default HomePage;