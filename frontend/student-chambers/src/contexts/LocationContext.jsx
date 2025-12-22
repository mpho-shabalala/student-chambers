import {createContext, useContext,useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import {useResource} from '../hooks/useResource.jsx'
const LocationContext = createContext();

const LocationProvider = ({children}) => {
    const location = useResource(api.getLocation);
    useEffect(() => {
        location.fetch();
    }, [])
    return (
    <LocationContext.Provider
        value={location}
    >
        {children}
    </LocationContext.Provider>
    )
}

const useLocation = () => {
    const ctx = useContext(LocationContext);

    if(ctx === undefined) throw new Error('useLocation context must be used inside the LocationProvider')
    return ctx;
}

export {useLocation, LocationProvider}