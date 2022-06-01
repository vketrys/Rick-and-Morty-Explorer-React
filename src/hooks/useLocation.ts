import { useEffect, useState } from 'react';
import axios from 'axios';

import paths from 'components/navigation/paths';
import { Location } from 'types/locationTypes';
import { examples } from 'types/generalTypes';

interface ServerResponse {
  data: Location;
}

const useLocation = (id: string): Location => {
  const [locations, setLocations] = useState<Location>(examples.location);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${paths.location}/${id}`)
      .then((response: ServerResponse) => {
        const locations: Location = response.data;
        setLocations(locations);
      });
  }, []);

  return locations;
};

export default useLocation;
