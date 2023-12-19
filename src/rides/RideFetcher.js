import {BACKEND_ENDPOINT} from "../Constants";
import axios from "axios";
import {useEffect, useState} from "react";

const ENDPOINT = BACKEND_ENDPOINT + 'ride/get/';

export default function RideFetcher({communityToShowRides}) {
    const [rides, setRides] = useState();

    async function fetchRidesForCommunity() {
        try {
            const response = await axios.get(ENDPOINT + communityToShowRides.id);
            setRides(response.data);
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

    // need to implement the fetching
    return <h2>{rides}</h2>
}