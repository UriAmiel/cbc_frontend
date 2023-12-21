import axios from 'axios';

export default async function ApiFetcher({endpoint, params}) {
    try {
        const fetchEndpoint = (endpoint || "") + (params || "");
        const response = await axios.get(fetchEndpoint);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
    }
}