import {BACKEND_ENDPOINT} from "../Constants";
import {useEffect} from "react";
import axios from "axios";

const ENDPOINT = BACKEND_ENDPOINT + 'community/getAll';
export default function CommunitiesFetcher({setCommunities}) {

    const fetchCommunities = async () => {
        try {
            const response = await axios.get(ENDPOINT);
            setCommunities(response.data);
        } catch (error) {
            console.error('Error fetching communities:', error);
            // Handle error as needed
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);
}