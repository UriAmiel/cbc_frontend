import React, {useState} from 'react';
import CommunityView from "./communities/CommunityView";
import RideView from "./rides/RideView";

export default function App() {
    const [communityToShowRide, setCommunityToShowRide] = useState(null);
    const [shouldShowCommunityRide, setShouldShowCommunityRide] = useState(false);

    function handleClickingOnCommunity(community) {
        if (community?.id === communityToShowRide?.id) {
            setShouldShowCommunityRide(shouldShowRide => !shouldShowRide);
        }
        setCommunityToShowRide(community);
    }

    return (
        <div>
            <CommunityView onCommunityClick={handleClickingOnCommunity}/>
            {shouldShowCommunityRide && <RideView communityToShowRide={communityToShowRide}/>}
        </div>
    );
};