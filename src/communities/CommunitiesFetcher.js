import {useEffect} from "react";
import ApiFetcher from "../utilities/api/fetcher/ApiFetcher";

export default function CommunitiesFetcher({setCommunities}) {

    async function fetchCommunities() {
        const dataFromApi = await ApiFetcher({
            path: 'community/getAll'
        });

        if (dataFromApi) {
            setCommunities(dataFromApi);
        }
    }

    useEffect(() => {
        fetchCommunities();
    }, []);
}