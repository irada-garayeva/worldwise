import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      Map
      <h4>
        Position: {lat}, {lng}
      </h4>
      {/* <button onClick={() => setSearchParams({ lat: 24, lng: 22 })}>
        Click
      </button> */}
    </div>
  );
}

export default Map;
