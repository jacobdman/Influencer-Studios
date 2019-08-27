import React, { useState } from 'react';
import RoofDataContext from './StudioContext';

const RoofDataProvider = props => {
  const [forceHeader, setForceHeader] = useState(false);

  const toggleForceHeader = () => {
    setForceHeader(!forceHeader);
  };

  return (
    <RoofDataContext.Provider
      value={{
        forceHeader,
        toggleForceHeader,
      }}
    >
      {props.children}
    </RoofDataContext.Provider>
  );
};

export default RoofDataProvider;
