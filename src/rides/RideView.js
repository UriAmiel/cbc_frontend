import RideFetcher from "./RideFetcher";
import React, {useState} from "react";
import RideList from "./RideList";

export default function RideView({communityToShowRide}) {
    const [communityRides, setCommunityRides] = useState([]);

    return <div>
        <RideFetcher communityToShowRides={communityToShowRide} setCommunityRides={setCommunityRides}/>
        <RideList rides={communityRides} communityName={communityToShowRide.name}/>
    </div>
}