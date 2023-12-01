import React, {useState, useEffect} from 'react';
import CreateCommunityForm from './CreateCommunityForm';
import CommunityList from "./CommunityList";
import {BACKEND_ENDPOINT} from "./Constants";

export default function App() {
    const [communities, setCommunities] = useState([]);

    const handleCreateCommunity = (newCommunity) => {
        setCommunities([...communities, newCommunity]);
    };

    const fetchCommunities = async () => {
        try {
            const response = await fetch(BACKEND_ENDPOINT + 'community/getAll');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCommunities(data);
        } catch (error) {
            console.error('Error fetching communities:', error);
            // Handle error as needed
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);


    return (
        <div>
            <CommunityList communities={communities}/>
            <CreateCommunityForm addCommunity={handleCreateCommunity}/>
        </div>
    );
};