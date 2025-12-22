import {createContext, useContext,useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import {useResource} from '../hooks/useResource.jsx'
const GalleryContext = createContext();

const GalleryProvider = ({children}) => {
    const gallery = useResource(api.getGallery);
    useEffect(() => {
        gallery.fetch();
    }, [])
    return (
    <GalleryContext.Provider
        value={gallery}
    >
        {children}
    </GalleryContext.Provider>
    )
}

const useGallery = () => {
    const ctx = useContext(GalleryContext);

    if(ctx === undefined) throw new Error('useGallery context must be used inside the GalleryProvider')
    return ctx;
}

export {useGallery, GalleryProvider}