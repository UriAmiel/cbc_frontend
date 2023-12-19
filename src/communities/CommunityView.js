import CommunitiesFetcher from "./CommunitiesFetcher";
import CommunityList from "./CommunityList";
import CreateCommunityForm from "./CreateCommunityForm";
import React, {useState} from "react";

export default function CommunityView({onCommunityClick}) {
    const [communities, setCommunities] = useState([]);

    function handleCreateCommunity(newCommunity) {
        setCommunities([...communities, newCommunity]);
    }


    return <div>
        <CommunitiesFetcher setCommunities={setCommunities}/>
        <CommunityList communities={communities} onCommunityClick={onCommunityClick}/>
        <CreateCommunityForm addCommunity={handleCreateCommunity}/>
    </div>
}