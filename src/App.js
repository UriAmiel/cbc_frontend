import React, {useState} from 'react';
import CreateCommunityForm from './CreateCommunityForm';
import CommunityList from "./CommunityList";
import CommunitiesFetcher from "./CommunitiesFetcher";

export default function App() {
    const [communities, setCommunities] = useState([]);

    const handleCreateCommunity = (newCommunity) => {
        setCommunities([...communities, newCommunity]);
    };

    return (
        <div>
            <CommunitiesFetcher setCommunities={setCommunities}/>
            <CommunityList communities={communities}/>
            <CreateCommunityForm addCommunity={handleCreateCommunity}/>
        </div>
    );
};