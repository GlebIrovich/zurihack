import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useCallback, useEffect, useState } from 'react';
import { DirectionsRenderer, GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { useDispatch, useSelector } from 'react-redux';
import { compose, withProps } from 'recompose';
import styled from 'styled-components';

import { addData } from '../../store/data/actions';
import { addLocation } from '../../store/location/actions';
import { dataSelector } from '../../store/selectors/data';
import { locationSelector } from '../../store/selectors/location';

const DEFAULT_ZOOM = 11;
const DEFAULT_CENTER = {
  lat: 47.36667,
  lng: 8.55,
};

const StyledProgress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  margin: 0 auto;
  width: 100%;
`;

const itemToWaypoint = ({ geo: { lat, lng } }) => ({ location: { lat, lng } });

const dataToWaypoints = (data) =>
  data.reduce((waypoints, item, index) => {
    if (data.length > 1 && index < data.length - 1) {
      waypoints.push(itemToWaypoint(item));
    }
    return waypoints;
  }, []);

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
    containerElement: <div style={{ height: `100%`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%`, width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ handleLoading }) => {
  const location = useSelector(locationSelector);
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [directions, setDirections] = useState(null);

  const fetchData = useCallback(() => {
    dispatch(addLocation());
    dispatch(addData());
  }, [dispatch]);
  useEffect(() => {
    if (location && data) {
      const DirectionsService = new window.google.maps.DirectionsService();
      const waypoints = dataToWaypoints(data);
      DirectionsService.route(
        {
          origin: location,
          destination: data.length && itemToWaypoint(data[data.length - 1]),
          waypoints,
          travelMode: window.google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions`, result);
          }
        }
      );
    } else {
      fetchData();
    }
  }, [data, location, fetchData]);

  useEffect(() => {
    if (directions && data && location) {
      handleLoading(false);
    }
  }, [handleLoading, directions, data, location]);
  return (
    <React.Fragment>
      <GoogleMap defaultZoom={DEFAULT_ZOOM} defaultCenter={DEFAULT_CENTER}>
        {data && data.map((item) => <Marker key={item.emoji} label={item.emoji} position={item.geo} />)}
        {location && <Marker label="you" position={location} />}
        {directions && <DirectionsRenderer directions={directions} options={{ markerOptions: { visible: false } }} />}
      </GoogleMap>
    </React.Fragment>
  );
});

export default Map;
