import { createContext, useCallback, useContext, useState } from "react";

const AppContext = createContext({
  properties: [],
  selectedProperty: null,
  loadProperties: (properties) => {},
  onSelectProperty: (property) => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const contextValue = {
    properties,
    selectedProperty,
    loadProperties: useCallback((properties) => setProperties(properties), []),
    onSelectProperty: useCallback(
      (property) => setSelectedProperty(property),
      []
    ),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
