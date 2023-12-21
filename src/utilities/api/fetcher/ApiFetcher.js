import axios from 'axios';
import {BACKEND_ENDPOINT} from "../../../Constants";

export default async function ApiFetcher({path, params}) {
    const fetchEndpoint = BACKEND_ENDPOINT + path + (params || "")
    try {
        const response = await axios.get(fetchEndpoint);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${fetchEndpoint}:`, error);
        return null;
    }
}