import {BACKEND_ENDPOINT} from "../Constants";
import {useEffect} from "react";
import ApiFetcher from "../utilities/api/fetcher/ApiFetcher";

const ENDPOINT = BACKEND_ENDPOINT + 'community/getAll';
export default function CommunitiesFetcher({setCommunities}) {

    async function fetchData() {
        const dataFromApi = await ApiFetcher({
            endpoint: ENDPOINT
        });

        if (dataFromApi) {
            setCommunities(dataFromApi);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
}