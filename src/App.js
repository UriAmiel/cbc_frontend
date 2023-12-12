import React, {useState} from 'react';
import CreateCommunityForm from './communities/CreateCommunityForm';
import CommunityList from "./communities/CommunityList";
import CommunitiesFetcher from "./communities/CommunitiesFetcher";
import RideFetcher from "./rides/RideFetcher";

export default function App() {
    const [communities, setCommunities] = useState([]);
    const [communityToShowRide, setCommunityToShowRide] = useState(null);
    const [shouldShowRide, setShouldShowRide] = useState(true);

    function handleCreateCommunity(newCommunity) {
        setCommunities([...communities, newCommunity]);
    }

    function handleShowRide(community) {
        if (community?.id === communityToShowRide?.id){
            setShouldShowRide(shouldShowRide => !shouldShowRide);
        }
        setCommunityToShowRide(community);
    }

    return (
        <div>
            <CommunitiesFetcher setCommunities={setCommunities}/>
            <CommunityList communities={communities} handleShowRide={handleShowRide}/>
            <CreateCommunityForm addCommunity={handleCreateCommunity}/>
            {shouldShowRide && <RideFetcher communityToShowRides={communityToShowRide}/>}
        </div>
    );
};