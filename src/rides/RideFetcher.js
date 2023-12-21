import {BACKEND_ENDPOINT} from "../Constants";
import axios from "axios";
import {useEffect} from "react";

const ENDPOINT = BACKEND_ENDPOINT + 'ride/get/';

export default function RideFetcher({communityToShowRides, setCommunityRides}) {
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
}