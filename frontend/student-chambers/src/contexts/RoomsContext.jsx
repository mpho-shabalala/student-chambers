import {createContext, useContext,useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import {useResource} from '../hooks/useResource.jsx'
const RoomsContext = createContext();

const RoomsProvider = ({children}) => {
    const rooms = useResource(api.getRooms);
    useEffect(() => {
        rooms.fetch();
    }, [])
    return (
    <RoomsContext.Provider
        value={rooms}
    >
        {children}
    </RoomsContext.Provider>
    )
}

const useRooms = () => {
    const ctx = useContext(RoomsContext);

    if(ctx === undefined) throw new Error('useRooms context must be used inside the RoomsProvider')
    return ctx;
}

export {useRooms, RoomsProvider}