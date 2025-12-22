import {createContext, useContext,useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import {useResource} from '../hooks/useResource.jsx'
const ContactsContext = createContext();

const ContactsProvider = ({children}) => {
    const contacts = useResource(api.getRooms);
    useEffect(() => {
        contacts.fetch();
    }, [])
    return (
    <ContactsContext.Provider
        value={contacts}
    >
        {children}
    </ContactsContext.Provider>
    )
}

const useContactsContext = () => {
    const ctx = useContext(ContactsContext);

    if(ctx === undefined) throw new Error('useContacts context must be used inside the ContactsProvider')
    return ctx;
}

export {useContactsContext, ContactsProvider}