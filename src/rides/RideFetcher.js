import {useEffect} from "react";
import ApiFetcher from "../utilities/api/fetcher/ApiFetcher";

export default function RideFetcher({communityToShowRides, setCommunityRides}) {
    async function fetchRidesForCommunity() {
        const dataFromApi = await ApiFetcher({
            path: 'ride/get/',
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