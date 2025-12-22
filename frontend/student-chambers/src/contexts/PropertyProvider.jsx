import {createContext, useContext,useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import {useResource} from '../hooks/useResource.jsx'
const PropertyContext = createContext();

const PropertyProvider = ({children}) => {
    const property = useResource(api.getRooms);
    useEffect(() => {
        property.fetch();
    }, [])
    return (
    <PropertyContext.Provider
        value={property}
    >
        {children}
    </PropertyContext.Provider>
    )
}

const usePropertyContext = () => {
    const ctx = useContext(PropertyContext);

    if(ctx === undefined) throw new Error('useProperty context must be used inside the PropertyProvider')
    return ctx;
}

export {usePropertyContext, PropertyProvider}