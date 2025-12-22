import {useState} from 'react'

export function useResource(fetcher) { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const fetch = async () => { 
        setLoading(true); 
        setError(null); 
        try { 
            const res = await fetcher(); 
            setData(res); 
        } catch (e) { 
            setError(e); 
        } finally { 
            setLoading(false); 
        } 
    }; 

    return { data, loading, error, fetch }; 
}