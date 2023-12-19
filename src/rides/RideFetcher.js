import {BACKEND_ENDPOINT} from "../Constants";
import axios from "axios";
import {useEffect, useState} from "react";
import RideList from "./RideList";

const ENDPOINT = BACKEND_ENDPOINT + 'ride/get/';

export default function RideFetcher({communityToShowRides}) {
    const [communityRides, setCommunityRides] = useState([]);

    async function fetchRidesForCommunity() {
        try {
            const response = await axios.get(ENDPOINT + communityToShowRides.id);
            setCommunityRides(response.data.community_rides);
        } catch (error) {
            console.error('Error fetching communities:', error);
            //TODO: Handle error as needed
        }
    }

    useEffect(() => {
        if (communityToShowRides !== null) {
            fetchRidesForCommunity();
        }
    }, [communityToShowRides]);

    return <RideList rides={communityRides}/>
}