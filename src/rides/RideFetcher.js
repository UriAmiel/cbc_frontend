import {BACKEND_ENDPOINT} from "../Constants";
import {useEffect} from "react";
import ApiFetcher from "../utilities/api/fetcher/ApiFetcher";

const ENDPOINT = BACKEND_ENDPOINT + 'ride/get/';

export default function RideFetcher({communityToShowRides, setCommunityRides}) {
    async function fetchRidesForCommunity() {
        const dataFromApi = await ApiFetcher({
            endpoint: ENDPOINT,
            params: communityToShowRides.id
        });

        if (dataFromApi.community_rides) {
            setCommunityRides(dataFromApi.community_rides);
        }
    }

    useEffect(() => {
        if (communityToShowRides !== null) {
            fetchRidesForCommunity();
        }
    }, [communityToShowRides]);
}